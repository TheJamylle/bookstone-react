const connection = require('../database/connection');

module.exports = {
    async create(req, res){
        const { id, password } = req.body;

        const user = await connection('users')
        .where('id', id)
        .select('name')
        .first();

        if(!user){
            return res.status(400).json({ error: 'No user found with this information' });
        }

        return res.json(user);
    }
}