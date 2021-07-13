
exports.up = async knex => knex.schema.createTable('ddd', table => {
    table.increments('dddCod')
    table.text('dddNum')
})

exports.down = async knex => knex.schema.dropTable('ddd')
