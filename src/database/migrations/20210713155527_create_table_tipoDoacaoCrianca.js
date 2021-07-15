
exports.up = async knex => knex.schema.createTable('tipoDoacaoCrianca', table => {
    table.increments('tDCCod')
    table.text('tDCDes')
})

exports.down = async knex => knex.schema.dropTable('tipoDoacaoCrianca')
