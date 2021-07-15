
exports.up = async knex => knex.schema.createTable('vestimenta', table => {
    table.increments('vesCod')

    table.integer('tVeCod')
        .references('tamanhoVestimenta.tVeCod')
        .notNullable()
        .onDelete('CASCADE')

    table.integer('criCod')
        .references('crianca.criCod')
        .notNullable()
        .onDelete('CASCADE')

    table.integer('tpVeCod')
        .references('tipoVestimenta.tpVeCod')
        .notNullable()
        .onDelete('CASCADE')
})

exports.down = async knex => knex.schema.dropTable('vestimenta')
