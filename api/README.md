# Teste backend Developer

### [x] Criar o projeto
$ npm install express-generator -g
$ criar pasta

### [x] Adicionar o GIT
$ git init
$ git checkout -b main
$ touch .gitignore // criar o arquivo `.gitignore`

### [x] Adicionar um README.md
$ touch readme.md // criar um arquivo `readme.md`  

### [x] Adicionar e configurar nodemon
```bash
$ npm i nodemon --save-dev
```

### [x] Colocar a projeto na estrutura de mercado
- [x] Criar a pasta `src`;
- [x] Mover pasta `routes`e arquivo `app.js` para a pasta `src`;
- [x] Arrumar referencia do `app.js` no arquivo `./bin/www`;

### [x] Apagar as pastas `public`e `views`;
- [x] Ao apagar as pastas não esqueçam de adaptar o codigo do arquivo `app.js`;
- [x] E o arquivo `./src/routes/inde.js`

**TROQUE:**
```javascript
res.render('index', { title: 'Express' });
```
**PARA:**
**TROQUE:**
```javascript
res.json({ title: 'Express' });
```
### [x] Deixar o projeto rodando


### [x] Definir a entidade de usuarios
```json
{
"id": "1",
"nome": "Bruno",
"email": "bruno_gf@hotmail.com",
"telefone": "34251622",
"senha": "123hgumdj",
"status": True
}
```

### [x] Definir endpoints da API
Create
- Criar usuário - [POST]`/usuarios`
Read
- Listar usuarios - [GET]`/usuários`
Update
- Buscar usuários -[GET] `/usuarios/:id`
- Atualizar usuários - [PUT] `/usuarios/:id`
Delete
- Apagar usuários - [DELETE]`/usuários/:id`

http://localhost:3000/usuarios

- Criar collections no POSTMAN
- Criar Rotas
- Criar Controller
- Criar Service
- Configurar Sequelize
- Criar model do user
- Implementar model no service
-
-