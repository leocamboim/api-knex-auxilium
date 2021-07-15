
exports.up = async knex => knex.schema.createTable('operadora', table => {
    table.increments('opeCod')
    table.text('opeNom')

    //relacionamento
    table.integer('dddCod')
        .references('ddd.dddCod')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamp(true, true)
})

exports.down = async knex => knex.schema.dropTable('operadora')