
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('estado').del()
    .then(function () {
      // Inserts seed entries
      return knex('estado').insert([
        {estNom :"AC"},
        {estNom :"AL"},
        {estNom :"AP"},
        {estNom :"AM"},
        {estNom :"BA"},
        {estNom :"CE"},
        {estNom :"DF"},
        {estNom :"ES"},
        {estNom :"GO"},
        {estNom :"MA"},
        {estNom :"MT"},
        {estNom :"MS"},
        {estNom :"MG"},
        {estNom :"PA"},
        {estNom :"PB"},
        {estNom :"PR"},
        {estNom :"PE"},
        {estNom :"PI"},
        {estNom :"RJ"},
        {estNom :"RN"},
        {estNom :"RS"},
        {estNom :"RO"},
        {estNom :"RR"},
        {estNom :"SC"},
        {estNom :"SP"},
        {estNom :"SE"},
        {estNom :"TO"}
      ]);
    });
};
