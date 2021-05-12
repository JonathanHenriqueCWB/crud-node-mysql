const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

// Configurando o template engine (handlebars)
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
    res.render('home')
})

app.get('/cadastrar', function(req, res) {
    res.render('formulario')
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