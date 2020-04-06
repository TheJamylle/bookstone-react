const connection = require('../database/connection');

module.exports = {
    async index(req, res){
        const user_id = req.headers.authorization;

        const books = await connection('books')
        .where('user_id', user_id)
        .select('*');

        return res.json(books);
    }
}