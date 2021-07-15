
exports.up = async knex => knex.schema.createTable('doacaoInstitucional', table => {
    table.increments('dInCod')

    table.integer('tpDCod')
        .references('tipoDoacaoInstitucional.tpDCod')
        .notNullable()
        .onDelete('CASCADE')

    table.integer('insCod')
        .references('instituicao.insCod')
        .notNullable()
        .onDelete('CASCADE')

})

exports.down = async knex => knex.schema.dropTable('doacaoInstitucional')
