# COLITUR

## Cómo rodar

1. Baixar o projeto e acessar a pasta geral chamada COLITUR.
2. Acesse a pasta colitur-web
```
$ cd colitur-web
```
3. Nessa pasta executar o comando:
```
$ npm install
```
4. Depois disso é possível rodar o frontend com o seguinte comando:
```
$ npm run dev
```

5. Para rodar o backend é necessário executar um entorno virtual. Para fazer isso, primeiro tem que acessar a pasta adequada (Isto tem que ser feito em uma nova console):

```
$ cd src/controllers/backend/
```

6. Nessa pasta tem que executar o comando seguinte:

```
$ source .venv/bin/activate
```
7. Com o entorno virtual ativado,o comando a executar para baixar os requerimentos necessários é:

```
$ pip install -r requirements.txt
```

8. Depois de ter baixado os requerimentos, para rodar o backend

```
$ flask run
```