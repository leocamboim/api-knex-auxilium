
exports.up = async knex => knex.schema.createTable('cep', table =>{
    table.increments('cepCod')
    table.text('cepNum').notNullable()

    //relacionamentos
    table.integer('logCod')
        .references('logradouro.logCod')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamp(true, true)
})

exports.down = async knex => knex.schema.dropTable('cep')