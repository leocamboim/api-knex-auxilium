
exports.up = async knex => knex.schema.createTable('cidade', table => {
    table.increments('cidCod')
    table.text('cidNom')

    //relacionamento
    table.integer('estCod')
        .references('estado.estCod')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamp(true, true)
})

exports.down = async knex => knex.schema.dropTable('cidade')