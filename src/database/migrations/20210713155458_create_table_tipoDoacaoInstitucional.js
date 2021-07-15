
exports.up = async knex => knex.schema.createTable('tipoDoacaoInstitucional', table => {
    table.increments('tpDCod')
    table.text('tpDDes')
})

exports.down = async knex => knex.schema.dropTable('tipoDoacaoInstitucional')
