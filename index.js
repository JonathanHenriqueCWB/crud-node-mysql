const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Cliente = require('./models/Clientes')

// Configurando o template engine (handlebars)
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Configurando o body-parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Rotas
app.get('/', function (req, res) {
    res.render('home')
})

app.get('/cadastrar', function(req, res) {
    res.render('formulario')
})

app.post('/cadastrar', function(req, res) {
    Cliente.create({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone

    }).then(function(){
        res.redirect('/')
    }).then(function(erro) {
        res.send('Erro ao cadastrar cliente!')
    })
})

app.listen(8080, function () {
    console.log('Server is runnig on port 8080')
})

/**
 *  1 - Instalar o express: npm install --save express
 *  2 - Instalar o banco de dados npm install --save mysql2
 *  3 - Instalar o ORM (Sequelize) npm install --save sequelize
 *  4 - Instalar o template engine: npm install --save express-handlebars
 *
 *  Opcional instalar o nodemon: npm install -g --save-dev nodemon  *
 */