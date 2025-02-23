
const connection = require('../data/db');

function Index(req, res) {

    const sql = `SELECT * FROM person`

    connection.query(sql, (err, person) => {
        if (err) res.status(500).json('Error to Index internal server', err)

        res.json(person)
    })
}

module.exports = { Index }