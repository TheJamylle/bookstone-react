const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(req, res){
        const users = await connection('users').select('name');
        
        return res.json(users);
    },
    async create(req, res){
        const { name, password, country } = req.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('users').insert({
            id,
            name,
            password,
            country
        });

        return res.json({ id });
    }
};