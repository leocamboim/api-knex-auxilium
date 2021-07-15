const knex = require('../database')

module.exports = {
    async create(req, res, next){
        try {
            const { tplNome } = req.body

            await knex('tipoLogradouro').insert({
                tplNome
            })

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    }
}