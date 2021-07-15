
exports.up = async knex => knex.schema.createTable('pedido', table => {
    table.increments('pedCod')
    table.text('pedDes')
    table.text('pedSta')

    table.integer('criCod')
        .references('crianca.criCod')
        .notNullable()
        .onDelete('CASCADE')
})

exports.down = async knex => knex.schema.dropTable('pedido')
