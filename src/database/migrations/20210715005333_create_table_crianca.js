
exports.up = async knex => knex.schema.createTable('crianca', table => {
    table.increments('criCod')
    table.text('criNom')

    table.integer('insCod')
        .references('instituicao.insCod')
        .notNullable()
        .onDelete('CASCADE')

    // table.integer('pedCod')
    //     .references('pedido.pedCod')
    //     .notNullable()
    //     .onDelete('CASCADE')

    table.date('criNas')
    table.text('criRg')
    table.text('criCPF')
    table.text('criGen')
})

exports.down = async knex => knex.schema.dropTable('crianca')
