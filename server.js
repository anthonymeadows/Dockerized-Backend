import express from 'express';
import pool from './db.js';

const port = 3000;
const app = express();

app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM schools')
        res.status(200).send(result.rows);
    } catch (error) {
        console.error('Internal server error: ', error);
        res.sendStatus(500);
    }
});

app.get('/setup', async (req, res) => {
    try {
        await pool.query('CREATE TABLE IF NOT EXISTS schools(id serial PRIMARY KEY, name VARCHAR(100), address VARCHAR(100))')
        res.status(200).send ({
            message: 'Successfully created table'
        });
    } catch (error) {
        console.error('Internal server error: ', error);
        res.sendStatus(500);
    }
});;

app.post('/', async (req, res) => {
    const { name, location } = req.body;
    try {
        await pool.query('INSERT INTO schools(name, address) VALUES ($1, $2)', [name, location]);
        res.status(200).send({
            message: "Successfully added child"
        });
    } catch (error) {
        console.error('Internal server error: ', error);
        res.sendStatus(500);
    }
});

//POST JSON BODY EXAMPLE { "name": "Kid Cudi", "location": "america" }

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
