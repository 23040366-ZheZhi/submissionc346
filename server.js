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

//display all cards in database
app.get('/allcomics', async (req, res) => {
    try {
        let connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM defaultdb.comics');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error for all comics' });
    }
});

//add new comic to database
app.post('/addcomic', async (req, res) => {
    const {comic_name, comic_pic } = req.body;
    try {
        let connection = await mysql.createConnection(dbConfig);
        await connection.execute('INSERT INTO comics (comic_name, comic_pic) VALUES (?, ?)', [comic_name, comic_pic]);
        res.status(201).json({ message: 'Comic '+comic_name+' added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error - could not add comic '+comic_name });
    }
});

//update comic 
app.put('/updatecomic/:id', async (req, res) => {
    const { id } = req.params;
    const { comic_name, comic_pic } = req.body;
    try {
        let connection = await mysql.createConnection(dbConfig);
        await connection.execute('UPDATE comics SET comic_name = ?, comic_pic = ? WHERE id = ?', [comic_name, comic_pic, id]);
        res.status(200).json({ message: 'Comic updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error - could not update comic' });
    }
});