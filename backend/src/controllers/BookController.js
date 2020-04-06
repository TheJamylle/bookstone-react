const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(req, res) {
        const books = await connection('books').select('*');

        const { page = 1 } = req.query;

        const [count] = await connection('books')
        .count();
        
        return res.json(books);
    },
    async create(req, res) {
        const { title, autor, editora } = req.body;
        const user_id = req.headers.authorization;

        const isbn = crypto.randomBytes(4).toString('HEX');

        await connection('books').insert({
            isbn,
            title,
            autor,
            editora,
            user_id
        });

        return res.json({ title });
    }
}