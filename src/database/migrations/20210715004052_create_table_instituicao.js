
exports.up = async knex => knex.schema.createTable('instituicao', table => {
    table.increments('insCod')
    table.text('insNom')
    table.text('insLog')
    table.text('insSen')

    table.integer('emaCod')
        .references('email.emaCod')
        .notNullable()
        .onDelete('CASCADE')

    table.integer('eDoCod')
        .references('estoqueDoacao.eDoCod')
        .notNullable()
        .onDelete('CASCADE')

    table.integer('cepCod')
        .references('cep.cepCod')
        .notNullable()
        .onDelete('CASCADE')

    table.integer('telCod')
        .references('telefone.telCod')
        .notNullable()
        .onDelete('CASCADE')

    table.integer('tInCod')
        .references('tipoInstituicao.tInCod')
        .notNullable()
        .onDelete('CASCADE')

})

exports.down = async knex => knex.schema.dropTable('instituicao')
