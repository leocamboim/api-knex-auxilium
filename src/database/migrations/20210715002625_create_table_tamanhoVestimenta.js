
exports.up = async knex => knex.schema.createTable('tamanhoVestimenta', table => {
    table.increments('tVeCod')
    table.text('tVeNum')
})

exports.down = async knex => knex.schema.dropTable('tamanhoVestimenta')
