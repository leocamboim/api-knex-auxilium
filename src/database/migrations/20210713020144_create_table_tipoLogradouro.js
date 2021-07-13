
exports.up = async knex => knex.schema.createTable('tipoLogradouro', table =>{
    table.increments('tplCod')
    table.text('tplNome').notNullable()
})


exports.down = async knex => knex.schema.dropTable('tipoLogradouro')