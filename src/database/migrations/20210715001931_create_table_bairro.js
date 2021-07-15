
exports.up = async knex => knex.schema.createTable('bairro', table => {
    table.increments('baiCod')
    table.text('baiNom')

    //relacionamento
    table.integer('cidCod')
        .references('cidade.cidCod')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamp(true, true)
})

exports.down = async knex => knex.schema.dropTable('bairro')