# TODO

# El administrador pueda registrar licenciados
# Administrador debe poder alterar su información
# Registrar libros
# Registrar publicaciones


# IMAGENES
# UsuarioImagen1, UsuarioImagen2, ...
# publicacionImagen1, publicacionImagen2, ...

import time
import sqlite3
from flask import Flask, g, request, jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
# eliminar bcrypt de requeriments

app = Flask(__name__)
CORS(app)

DATABASE = 'BD_COLITUR.sqlite'

usuario_logeado = None
# usuario_logeado = 12345678


def get_usuario_logeado():
    global usuario_logeado
    return usuario_logeado


def set_usuario_logeado(usuario):
    global usuario_logeado

    usuario_logeado = usuario
    print(usuario_logeado)


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    # print("CONEXIÓN")
    return db

# .close() para cerrar el cursor


def get_cursor():
    return get_db().cursor()



@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route('/cerrar_sesion')
def cerrar_sesion():
    global usuario_logeado
    usuario_logeado = None
    return jsonify({'success': True, 'message': 'Sesión cerrada'})



@app.route('/prueba')
def prueba():
    asd = get_db().cursor()
    asd.execute('SELECT * FROM Usuario')
    usuario = asd.fetchall()
    return str(usuario)


@app.route('/get_datos_usuario', methods=['GET'])
def get_datos_usuario():
    try:
        cursor = get_cursor()
        # Buscar el usuario
        cursor.execute(
            "SELECT * FROM Usuario WHERE dniUsuario = ?", (usuario_logeado,))
        usuario = cursor.fetchone()

        cursor.execute(
            "SELECT * FROM Licenciado WHERE dniUsuario = ?", (usuario_logeado,))

        licenciado = cursor.fetchone()

        return {
            "numero_colegiado": licenciado[0],
            "estado_colegiado": licenciado[3],
            "fecha_incorporacion": licenciado[2],
            "dni": usuario_logeado,
            "nombre": usuario[1],
            "apl_paterno": usuario[3],
            "apl_materno": usuario[4],
            "telefono": usuario[5],
            "correo": usuario[6],

        }
    except Exception as e:
        print(f"Error al obtener datos de usuario: {str(e)}")
        return jsonify({'success': False, 'message': 'Error en el servidor'}), 500


@app.route('/actualizar_datos_usuario', methods=['POST'])
def actualizar_datos_usuario():
    try:
        data = request.get_json()

        nombre = data.get('nombres')
        numero_colegiado = data.get('numeroColegiado')
        ap_paterno = data.get('apellidoPaterno')
        ap_materno = data.get('apellidoMaterno')
        telefono = data.get('celular')
        correo = data.get('email')
        estado_colegiado = data.get('estado_colegiado')
        fecha_incorporacion = data.get('fechaIncorporacion')
        dni = data.get('dni')

        cursor = get_cursor()

        cursor.execute("""
            UPDATE Usuario
            SET priNombre = ?, apePaterno = ?, apeMaterno = ?, telefono = ?, email = ?
            WHERE dniUsuario = ?
        """, (nombre, ap_paterno, ap_materno, telefono, correo, usuario_logeado))

        get_db().commit()

        return jsonify({'success': True, 'message': 'Datos actualizados correctamente'})

    except Exception as e:
        print(f"Error al actualizar datos de usuario: {str(e)}")
        return jsonify({'success': False, 'message': 'Error en el servidor'}), 500


# Añadir mensaje de logeo exitoso
@app.route('/login', methods=['GET'])
def login():
    try:
        # data = request.get_json()
        username = request.args.get('username')
        password = request.args.get('password')

        # Verificar que se proporcionaron ambos campos
        if not username or not password:
            return jsonify({'success': False, 'message': 'Faltan campos requeridos'}), 400

        # Conectar a la base de datos
        cursor = get_cursor()

        # Buscar el usuario
        cursor.execute(
            "SELECT * FROM Usuario WHERE dniUsuario = ?", (username,))

        usuario = cursor.fetchone()
        if not usuario:
            return jsonify({'success': False, 'message': 'Usuario no encontrado'}), 404

        # Verificar la contraseña
        try:
            is_valid = check_password_hash(usuario[-1], password)
        except Exception as e:
            print(f"Error al verificar contraseña: {str(e)}")
            return jsonify({'success': False, 'message': 'Error al verificar credenciales'}), 500

        # Verificar si el usuario existe y la contraseña es correcta
        if is_valid:
            set_usuario_logeado(username)
            return jsonify({
                'success': True,
                'message': 'Inicio de sesión exitoso',
                'user': {
                    'dni': usuario[0],
                    'nombre': usuario[1]
                    # Añade aquí otros campos que necesites
                }
            })

        return jsonify({'success': False, 'message': 'Credenciales incorrectas'}), 401

    except Exception as e:
        print(f"Error en login: {str(e)}")
        return jsonify({'success': False, 'message': 'Error en el servidor'}), 500

# Para cambiar la contraseña


@app.route('/cambiar_clave', methods=['POST'])
def cambiar_clave():
    try:
        data = request.get_json()
        old_password = data.get('passwordActual')
        new_password = data.get('newPassword')

        if not old_password or not new_password:
            return jsonify({'success': False, 'message': 'Faltan campos'}), 400

        cursor = get_cursor()
        cursor.execute(
            "SELECT * FROM Usuario WHERE dniUsuario = ?", (usuario_logeado,))
        usuario = cursor.fetchone()

        if not usuario:
            return jsonify({'success': False, 'message': 'Usuario no encontrado'}), 404

        if not check_password_hash(usuario[-1], old_password):
            return jsonify({'success': False, 'message': 'Contraseña incorrecta'}), 401

        new_hashed_password = generate_password_hash(new_password)
        cursor.execute("UPDATE Usuario SET password = ? WHERE dniUsuario = ?",
                       (new_hashed_password, usuario_logeado))
        get_db().commit()

        return jsonify({'success': True, 'message': 'Contraseña cambiada correctamente'})

    except Exception as e:
        print(f"Error al cambiar contraseña: {str(e)}")
        return jsonify({'success': False, 'message': 'Error en el servidor'}), 500


@app.route('/registrar_colegiado', methods=['POST'])
def registrar_colegiado():
    try:
        data = request.get_json()

        fecha_incorporacion = data.get('fechaIncorporacion')
        numero_colegiado = data.get('numeroColegiado')
        dni = data.get('dni')
        ap_paterno = data.get('apellidoPaterno')
        ap_materno = data.get('apellidoMaterno')
        nombre = data.get('nombres')
        estado_colegiado = data.get('estadoColegiado')
        telefono = data.get('celular')
        correo = data.get('email')
        contraseña = data.get('contraseña')
        confirmar_contraseña = data.get('confirmarContraseña')

        # Validaciones
        if not all([fecha_incorporacion, numero_colegiado, dni, ap_paterno, ap_materno, nombre,
                    estado_colegiado, telefono, correo, contraseña, confirmar_contraseña]):
            return jsonify({'success': False, 'message': 'Faltan campos'}), 400

        if contraseña != confirmar_contraseña:
            return jsonify({'success': False, 'message': 'Las contraseñas no coinciden'}), 400

        cursor = get_cursor()

        # Verificar si el DNI ya existe
        cursor.execute("SELECT * FROM Usuario WHERE dniUsuario = ?", (dni,))
        usuario_existente = cursor.fetchone()
        if usuario_existente:
            return jsonify({'success': False, 'message': 'DNI ya registrado'}), 400

        # Hashear la contraseña
        hashed_password = generate_password_hash(contraseña)

        # Insertar el usuario
        cursor.execute("""
            INSERT INTO Usuario (dniUsuario, priNombre, segNombre, apePaterno, apeMaterno, telefono, email, password)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """, (dni, nombre, "", ap_paterno, ap_materno, telefono, correo, hashed_password))

        cursor.execute(
            "SELECT * FROM Administrador WHERE dniUsuario = ?", (usuario_logeado,))
        administrador_existente = cursor.fetchone()

        if not administrador_existente:
            return jsonify({'success': False, 'message': 'No se encontro administrador'}), 404

        splited_fecha = fecha_incorporacion.split('-')
        ano = int(splited_fecha[0])
        mes = int(splited_fecha[1])
        dia = int(splited_fecha[2])

        fecha_expiracion = f"{ano + 1}-{mes}-{dia}"

        # Insertar el licenciado
        cursor.execute("""
            INSERT INTO Licenciado (nroLicenciado, dniUsuario, fecIncorp, estadoHab, fecExpiracion, idAdmin)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (numero_colegiado, dni, fecha_incorporacion, estado_colegiado, fecha_expiracion, administrador_existente[0]))

        get_db().commit()

        return jsonify({'success': True, 'message': 'Colegiado registrado correctamente'})

    except Exception as e:
        print(f"Error al registrar colegiado: {str(e)}")
        get_db().rollback()  # Revertir la transacción en caso de error
        return jsonify({'success': False, 'message': 'Error en el servidor'}), 500

    pass

# interface Licenciado {
#     imagen?: string;
#     nombre: string;
#     numero: string;
#     estado: string;
#     mostrarBoton?: boolean;
# }


@app.route('/get_habilitados', methods=['GET'])
def get_habilitados():
    try:
        cursor = get_cursor()
        cursor.execute(
            "SELECT dniUsuario FROM Licenciado WHERE estadoHab = 'HABILITADO'")
        habilitados = cursor.fetchall()
        lista_habilitados = []
        for habilitado in habilitados:
            cursor.execute(
                "SELECT * FROM Usuario WHERE dniUsuario = ?", (habilitado[0],))
            usuario = cursor.fetchone()
            lista_habilitados.append({
                "numero": usuario[0],
                "nombre": usuario[3]+" "+usuario[4]+" "+usuario[1],
                "estado": "Habilitado",
            })
        return jsonify(lista_habilitados)
    except Exception as e:
        print(f"Error al obtener habilitados: {str(e)}")
        return jsonify({'success': False, 'message': 'Error en el servidor'}), 500
    
    
@app.route('/buscar_habilitados', methods=['GET'])
def buscar_habilitados():
    try:
        cursor = get_cursor()
        search_query = request.args.get('search')
        cursor.execute(
            f"SELECT dniUsuario FROM Licenciado WHERE dniUsuario LIKE '{search_query}%' AND estadoHab = 'HABILITADO'")
        
        habilitados = cursor.fetchall()
        lista_habilitados = []
        for habilitado in habilitados:
            cursor.execute(
                "SELECT * FROM Usuario WHERE dniUsuario = ?", (habilitado[0],))
            usuario = cursor.fetchone()
            lista_habilitados.append({
                "numero": usuario[0],
                "nombre": usuario[3]+" "+usuario[4]+" "+usuario[1],
                "estado": "Habilitado",
            })
        return jsonify(lista_habilitados)
    except Exception as e:
        print(f"Error al obtener habilitados: {str(e)}")
        return jsonify({'success': False, 'message': 'Error en el servidor'}), 500


if __name__ == '__main__':
    app.run(debug=True)
# Para testear acceder a http://127.0.0.1:5000/RUTA_DEFINIDA
