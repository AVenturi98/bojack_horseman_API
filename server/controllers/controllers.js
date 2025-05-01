
const connection = require('../data/db');

function Index(req, res) {

    const sql = `SELECT * FROM person`

    connection.query(sql, (err, persons) => {
        if (err) res.status(500).json('Error internal server to Index controller', err)

        res.json(persons)
    })
}


async function Show(req, res) {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'ID is required' });
    }

    try {
        // Query per ottenere i dettagli della persona
        const [personResult] = await new Promise((resolve, reject) => {

            const sql_pers = `
                SELECT * 
                FROM person
                JOIN \`character\`
                WHERE person.id = \`character\`.person_id
                AND person.id = ?`;

            connection.query(sql_pers, [id], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });

        if (!personResult) {
            return res.status(404).json({ message: 'Person not found' });
        }

        const person = personResult;

        // Query per ottenere gli episodi in cui è presente
        const episodes = await new Promise((resolve, reject) => {
            const sql = `
                SELECT episode.*
                FROM episode 
                JOIN episode_person
                JOIN person
                WHERE episode.id = episode_person.episode_id 
                AND episode_person.person_id = person.id
                AND person.id = ? 
                ORDER BY episode.id ASC`;

            connection.query(sql, [id], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });

        person.presence = episodes;

        // Query per ottenere le stagioni
        const seasons = await new Promise((resolve, reject) => {

            const sql_season = `
                SELECT season.*, episode.name as episode_name
                FROM season
                JOIN episode
                JOIN episode_person as e_p
                JOIN person
                WHERE season.id = episode.season_id
                AND episode.id = e_p.episode_id
                AND e_p.person_id = person.id
                AND person.id = ?
                ORDER BY season.id ASC`;

            connection.query(sql_season, [id], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });

        person.season = seasons;

        // Risposta finale
        res.json(person);

    } catch (err) {

        console.error('Error in Show controller:', err);
        res.status(500).json({ message: 'Internal server error', error: err });
    }
}

module.exports = { Index, Show }