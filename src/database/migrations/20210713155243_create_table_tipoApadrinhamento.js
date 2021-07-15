
exports.up = async knex => knex.schema.createTable('tipoApadrinhamento', table => {
    table.increments('tApCod')
    table.text('tipApa')
})

exports.down = async knex => knex.schema.dropTable('tipoApadrinhamento')
