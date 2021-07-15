
exports.up = async knex => knex.schema.createTable('tipoInstituicao', table => {
    table.increments('tInCod')
    table.text('tInDes')
})

exports.down = async knex => knex.schema.dropTable('tipoInstituicao')
