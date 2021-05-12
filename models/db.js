const Sequelize = require('sequelize')

const sequelize = new Sequelize('crud_node_mysql', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

// Confi string de conexao