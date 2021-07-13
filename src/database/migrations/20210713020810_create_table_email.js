
exports.up = async knex => knex.schema.createTable('email', table => {
    table.increments('emaCod')
    table.text('emaEnd')
})

exports.down = async knex => knex.schema.dropTable('email')
