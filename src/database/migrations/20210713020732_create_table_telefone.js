
exports.up = async knex => knex.schema.createTable('telefone', table => {
    table.increments('telCod')
    table.text('telNumResidencial')
    table.text('telNumTelefone')
    table.text('telDDD')

    //relacionamento
    table.integer('opeCod')
        .references('operadora.opeCod')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamp(true, true)
})

exports.down = async knex => knex.schema.dropTable('telefone')