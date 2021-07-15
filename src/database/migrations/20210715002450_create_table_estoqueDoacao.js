
exports.up = async knex => knex.schema.createTable('estoqueDoacao', table => {
    table.increments('eDoCod')
    table.text('eDoDes')
})

exports.down = async knex => knex.schema.dropTable('estoqueDoacao')
