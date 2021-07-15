
exports.up = async knex => knex.schema.createTable('tipoVestimenta', table => {
    table.increments('tpVeCod')
    table.text('tpVeDes')
})

exports.down = async knex => knex.schema.dropTable('tipoVestimenta')
