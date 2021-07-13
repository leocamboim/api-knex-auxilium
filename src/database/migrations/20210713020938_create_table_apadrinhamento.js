
exports.up = async knex => knex.schema.createTable('apadrinhamento', table => {
    table.increments('apaCod')
    // table.text('estNom')

    table.timestamp(true, true)
})


exports.down = async knex => knex.schema.dropTable('apadrinhamento')
