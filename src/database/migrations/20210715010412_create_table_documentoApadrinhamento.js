
exports.up = async knex => knex.schema.createTable('documentoApadrinhamento', table => {
    table.increments('dApCod')
    table.text('dApDes')
    table.text('dApSta')

    table.integer('apaCod')
        .references('apadrinhamento.apaCod')
        .notNullable()
        .onDelete('CASCADE')

})

exports.down = async knex => knex.schema.dropTable('documentoApadrinhamento')
