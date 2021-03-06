const PORT = 8000;
const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
require('dotenv').config();
//app.use(express.json);



app.get('/', (req, res) => {
    res.json('this works');
})

// //get all the scores if database not used for more than 24 hours have to make request and wait 5 mins for database to become active again
app.get('/scores', (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': process.env.ASTRA_TOKEN
        }
    }
    axios(`${process.env.URL}?page-size=20`, options)
        .then(response => res.status(200).json(response.data))
        .catch(err => res.status(500).json({ message: err }))
});

// //post scores to database
app.post('/addscore', (req, res) => {
    console.log(req);
    const testData = {
        username: 'Spencer',
        score: 15
    }
    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': process.env.ASTRA_TOKEN,
            'Content-Type': 'application/json'
        },
        data: testData
    }
    axios(process.env.URL, options)
        .then(response => res.status(200).json(response.data))
        .catch(err => res.status(500).json({ message: err }))
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));