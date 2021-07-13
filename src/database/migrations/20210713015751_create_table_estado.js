
exports.up = async knex => knex.schema.createTable('estado', table => {
    table.increments('estCod')
    table.text('estNom')
})

exports.down = async knex => knex.schema.dropTable('estado')
