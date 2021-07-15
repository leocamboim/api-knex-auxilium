
exports.up = async knex => knex.schema.createTable('apadrinhamento', table => {
    table.increments('apaCod')

    table.integer('tApCod')
        .references('tipoApadrinhamento.tApCod')
        .notNullable()
        .onDelete('CASCADE')

    table.integer('criCod')
        .references('ciranca.criCod')
        .notNullable()
        .onDelete('CASCADE')

    table.integer('padCod')
        .references('padrinhos.padCod')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamp(true, true)
})


exports.down = async knex => knex.schema.dropTable('apadrinhamento')
