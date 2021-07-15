
exports.up = async knex => knex.schema.createTable('doacaoCrianca', table => {
    table.increments('dCrCod')

    table.integer('tDCCod')
        .references('tipoDoacaoCrianca.tDCCod')
        .notNullable()
        .onDelete('CASCADE')

    table.integer('criCod')
        .references('crianca.criCod')
        .notNullable()
        .onDelete('CASCADE')

})

exports.down = async knex => knex.schema.dropTable('doacaoCrianca')
