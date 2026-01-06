//required packages
const express = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config();
const port = 3000;

//database config info
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0
};

//initialize express app
const app = express();
//helps app to read JSON
app.use(express.json());

//start server
app.listen(port, () => {
    console.log('Server running on port', port);
});

//display all games in database
app.get('/allgames', async (req, res) => {
    try {
        let connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM defaultdb.games');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error for allgames' });
    }
});

//add new game to database
app.post('/addgame', async (req, res) => {
    const {game_name, game_link } = req.body;
    try {
        let connection = await mysql.createConnection(dbConfig);
        await connection.execute('INSERT INTO games (game_name, game_link) VALUES (?, ?)', [game_name, game_link]);
        res.status(201).json({ message: 'Game '+game_name+'added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error - could not add game '+game_name });
    }
});

//update game 
app.put('/updategame/:id', async (req, res) => {
    const { id } = req.params;
    const { game_name, game_link } = req.body;
    try {
        let connection = await mysql.createConnection(dbConfig);
        await connection.execute('UPDATE games SET game_name = ?, game_link = ? WHERE id = ?', [game_name, game_link, id]);
        res.status(200).json({ message: 'Game updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error - could not update game' });
    }
});

//delete game
app.delete('/deletegame/:id', async (req, res) => {
    const { id } = req.params;
    const { game_name, game_link } = req.body;
    try {
        let connection = await mysql.createConnection(dbConfig);
        await connection.execute('DELETE FROM games WHERE id = ?', [id]);
        res.status(200).json({ message: 'Game deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error - could not delete game' });
    }
});