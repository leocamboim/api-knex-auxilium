
exports.up = async knex => knex.schema.createTable('itemDoacaoInstitucional', table => {

    table.integer('PadCod')
        .references('padrinhos.PadCod')
        .notNullable()
        .onDelete('CASCADE')

    table.integer('dInCod')
        .references('doacaoInstitucional.dInCod')
        .notNullable()
        .onDelete('CASCADE')
})

exports.down = async knex => knex.schema.dropTable('itemDoacaoInstitucional')
