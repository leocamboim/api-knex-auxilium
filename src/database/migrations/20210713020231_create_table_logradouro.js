
exports.up = async knex => knex.schema.createTable('logradouro', table =>{
    table.increments('logCod')
    table.text('logNome').notNullable()

    // relacionamentos
    table.integer('tplCod')
        .references('tipoLogradouro.tplCod')
        .notNullable()
        .onDelete('CASCADE')

    table.integer('baiCod')
        .references('bairro.baiCod')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamp(true, true)
})

exports.down = async knex => knex.schema.dropTable('logradouro')