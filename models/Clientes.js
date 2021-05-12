const db = require('./db')

const Cliente = db.sequelize.define('clientes', {
    name: {
        type: db.Sequelize.STRING
    },
    lastName: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    phone: {
        type: db.Sequelize.STRING
    }
})
// Cliente.sync({ force: true })

module.exports = Cliente