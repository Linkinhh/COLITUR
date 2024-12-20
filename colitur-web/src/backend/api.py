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

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    #print("CONEXIÓN")
    return db

# .close() para cerrar el cursor
def get_cursor():
    return get_db().cursor()


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route('/prueba')
def prueba():
    asd = get_db().cursor()
    asd.execute('SELECT * FROM Usuario')
    usuario = asd.fetchall()
    return str(usuario)

# Añadir mensaje de logeo exitoso
@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        
        # Verificar que se proporcionaron ambos campos
        if not username or not password:
            return jsonify({'success': False, 'message': 'Faltan campos requeridos'}), 400

        # Conectar a la base de datos
        cursor = get_cursor()
        
        # Buscar el usuario
        cursor.execute("SELECT * FROM Usuario WHERE dniUsuario = ?", (username,))
        
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

def registrar_licenciados():
    
    pass

def validar_pagos():
    pass

def generar_certificado():
    pass

def registrar_licenciado():
    pass

def registrar_libros():
    pass

def registrar_publicaciones():
    pass

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'message': 'Token faltante'}), 401
        
        try:
            token = token.split(' ')[1]  # Remover 'Bearer '
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
            current_user_id = data['user_id']
        except:
            return jsonify({'message': 'Token inválido'}), 401
        
        return f(current_user_id, *args, **kwargs)
    
    return decorated

@app.route('/user-data', methods=['GET'])
@token_required
def get_user_data(current_user_id):
    try:
        cursor = get_cursor()
        cursor.execute('''
            SELECT fechaIncorporacion, numeroColegiado, dni, 
                apellidoPaterno, apellidoMaterno, nombres,
                estadoColegiado, celular, email
            FROM Usuario 
            WHERE id = ?
        ''', (current_user_id,))
        
        user = cursor.fetchone()
        
        if user:
            return jsonify({
                'fechaIncorporacion': user['fechaIncorporacion'],
                'numeroColegiado': user['numeroColegiado'],
                'dni': user['dni'],
                'apellidoPaterno': user['apellidoPaterno'],
                'apellidoMaterno': user['apellidoMaterno'],
                'nombres': user['nombres'],
                'estadoColegiado': user['estadoColegiado'],
                'celular': user['celular'],
                'email': user['email']
            })
        
        return jsonify({'message': 'Usuario no encontrado'}), 404
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'message': 'Error en el servidor'}), 500

@app.route('/update-user', methods=['POST'])
@token_required
def update_user(current_user_id):
    try:
        data = request.get_json()
        
        # Validar campos requeridos
        required_fields = ['dni', 'apellidoPaterno', 'apellidoMaterno', 
                        'nombres', 'celular', 'email']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'message': f'Campo {field} es requerido'}), 400

        cursor = get_cursor()
        db = get_db()
        
        # Actualizar solo los campos editables
        cursor.execute('''
            UPDATE Usuario 
            SET apellidoPaterno = ?,
                apellidoMaterno = ?,
                nombres = ?,
                celular = ?,
                email = ?
            WHERE id = ?
        ''', (
            data['apellidoPaterno'],
            data['apellidoMaterno'],
            data['nombres'],
            data['celular'],
            data['email'],
            current_user_id
        ))
        
        db.commit()
        
        return jsonify({'message': 'Datos actualizados correctamente'})
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'message': 'Error en el servidor'}), 500

# Para testear acceder a http://127.0.0.1:5000/RUTA_DEFINIDA