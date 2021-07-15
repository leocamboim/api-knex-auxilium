
exports.up = async knex => knex.schema.createTable('itemDoacaoCrianca', table => {

    table.integer('padCod')
        .references('padrinhos.padCod')
        .notNullable()
        .onDelete('CASCADE')

    table.integer('dCrCod')
        .references('doacaoCrianca.dCrCod')
        .notNullable()
        .onDelete('CASCADE')
})

exports.down = async knex => knex.schema.dropTable('itemDoacaoCrianca')
