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

//display all appliancess in database
app.get('/allappliances', async (req, res) => {
    try {
        let connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM defaultdb.appliances');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error for all appliances' });
    }
});

//add new appliance to database
app.post('/addappliance', async (req, res) => {
    const {appliance_name, watts, hours_used, energy_usage } = req.body;
    try {
        let connection = await mysql.createConnection(dbConfig);
        await connection.execute('INSERT INTO appliances (appliance_name, watts, hours_used, energy_usage ) VALUES (?, ?, ?, ?)', [appliance_name, watts, hours_used, energy_usage]);
        res.status(201).json({ message: appliance_name+' added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error - could not add appliance '+appliance_name });
    }
});

//update appliance
app.put('/updateappliance/:id', async (req, res) => {
    const { id } = req.params;
    const { appliance_name, watts, hours_used, energy_usage } = req.body;
    try {
        let connection = await mysql.createConnection(dbConfig);
        await connection.execute('UPDATE appliances SET appliance_name = ?, watts = ?, hours_used = ?, energy_usage = ? WHERE id = ?', [appliance_name, watts, hours_used, energy_usage, id]);
        res.status(200).json({ message: 'Appliance entry updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error - could not update appliance' });
    }
});

app.delete('/deleteappliance/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let connection = await mysql.createConnection(dbConfig);
        await connection.execute('DELETE FROM appliances WHERE id ='+id);
        res.status(201).json({ message: 'Appliance '+id+' deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error - could not delete appliance '+id });
    }
});