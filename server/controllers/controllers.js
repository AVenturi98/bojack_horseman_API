
const connection = require('../data/db');

function Index(req, res) {

    const sql = `SELECT * FROM person`

    connection.query(sql, (err, persons) => {
        if (err) res.status(500).json('Error internal server to Index controller', err)

        res.json(persons)
    })
}


function Show(req, res) {

    const { id, season } = req.params

    if (!id) console.error({ message: 'Error internal server to Show controller: ID' })


    const sql_pers = `SELECT * FROM person WHERE id = ?`

    connection.query(sql_pers, [id], (err, result) => {
        if (err) res.status(500).json('Error internal server to Show controller', err)
        const person = result[0]


        const sql = `
    SELECT episode.*
     FROM episode 
     JOIN episode_person
     JOIN person
     WHERE episode.id = episode_person.episode_id 
     AND episode_person.person_id = person.id
     AND person.id = ? 
     AND episode.season_id = ?
     ORDER BY episode.id ASC`

        connection.query(sql, [id, season], (err, result) => {
            if (err) res.status(500).json('Error internal server to Show controller', err)

            person.person = result
            res.json(person)
        })
    })
}

module.exports = { Index, Show }