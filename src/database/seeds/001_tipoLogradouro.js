
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tipoLogradouro').del()
    .then(function () {
      // Inserts seed entries
      return knex('tipoLogradouro').insert([
        { tplNome: "aeroporto" },
        { tplNome: "alameda" },
        { tplNome: "área" },
        { tplNome: "avenida" },
        { tplNome: "campo" },
        { tplNome: "chácara" },
        { tplNome: "colônia" },
        { tplNome: "condomínio" },
        { tplNome: "conjunto" },
        { tplNome: "distrito" },
        { tplNome: "esplanada" },
        { tplNome: "estação" },
        { tplNome: "estrada" },
        { tplNome: "favela" },
        { tplNome: "fazenda" },
        { tplNome: "feira" },
        { tplNome: "jardim" },
        { tplNome: "ladeira" },
        { tplNome: "lago" },
        { tplNome: "lagoa" },
        { tplNome: "largo" },
        { tplNome: "loteamento" },
        { tplNome: "morro" },
        { tplNome: "núcleo" },
        { tplNome: "parque" },
        { tplNome: "passarela" },
        { tplNome: "pátio" },
        { tplNome: "praça" },
        { tplNome: "quadra" },
        { tplNome: "recanto" },
        { tplNome: "residencial" },
        { tplNome: "rodovia" },
        { tplNome: "rua" },
        { tplNome: "setor" },
        { tplNome: "sítio" },
        { tplNome: "travessa" },
        { tplNome: "trecho" },
        { tplNome: "trevo" },
        { tplNome: "vale" },
        { tplNome: "vereda" },
        { tplNome: "via" },
        { tplNome: "viaduto" },
        { tplNome: "viela" },
        { tplNome: "vila" }
      ]);
    });
};
