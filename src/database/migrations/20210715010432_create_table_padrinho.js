
exports.up = async knex => knex.schema.createTable('padrinhos', table => {
    table.increments('padCod')
    table.text('padNome').notNullable()
    table.text('padCPF').notNullable()
    table.text('padNum').notNullable()
    table.text('padLog').unique().notNullable()
    table.text('padSen').notNullable()

    //relacionamentos
    table.integer('telCod')
        .references('telefone.telCod')
        .notNullable()
        .onDelete('CASCADE')

    table.integer('emaCod')
        .references('email.emaCod')
        .notNullable()
        .onDelete('CASCADE')
    
    table.integer('apaCod')
        .references('apadrinhamento.apaCod')
        .notNullable()
        .onDelete('CASCADE')

    table.integer('cepCod')
        .references('cep.cepCod')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamp(true, true)
})

exports.down = async knex => knex.schema.dropTable('padrinhos')