const PORT = 8000;
const axios = require('axios');
const express = require('express');
const app = express();

const url = 'https://0e5e1595-e02d-49f8-9625-d3ff34931459-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/highscores/collections/scores?page-size=20';

app.get('/', (req, res) => {
    res.json('this works');
})

//get all the scores
app.get('/scores', (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': 'AstraCS:cQUhkbplLXOryANFkmLyjFjP:4ab20a20a6e9c2d34902b0df10c70212b34fac59a4a2ddc39bb5a4791eaca6e1'
        }
    }
    axios(url, options)
        .then(response => res.status(200).json(response.data))
        .catch(err => res.status(500).json({ message: err }))
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));