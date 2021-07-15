
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tipoApadrinhamento').del()
    .then(function () {
      // Inserts seed entries
      return knex('tipoApadrinhamento').insert([
        { tipApa : "Apadrinhamento afetivo" },
        { tipApa : "Apadrinhamento financeiro" },
        { tipApa : "Apadrinhamento serviço" }
      ]);
    });
};
