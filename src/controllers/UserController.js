const knex = require('../database')

module.exports = {
    async create(req, res, next){
        try {
            const [padNome, padCpf, padNum, padLog, padSen] = req.body

            await knex('padrinhos').insert({
                padNome, 
                padCpf, 
                padNum, 
                padLog, 
                padSen
            })
            
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    }
}