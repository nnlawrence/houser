require('dotenv').config();
//const saveData = require('./savedb');
const express = require('express')
const dotenv = require('dotenv')
const massive = require('massive')
const ctrl = require('./controller')

const { CONNECTION_STRING } = process.env

const app = express()

app.use(express.json())

//en



app.listen(4000, () => {
    console.log('server running');

    app.post('/api/houses:userdata', (req, res) => {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

    

    massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log('database connected')
        dbInstance.houses.insert({ name: req.params.name, address: req.params.address, city: req.params.city, state: req.params.state, zipcode: req.params.zipcode}, (err, response) => {
            res.send(response);
            res.close();
        });
    })
    .catch(error => {
        console.log(error)
    })
        res.set('Connection', 'close');
        res.send(response);
        res.end();
    });

    app.get('/api/houses', ctrl.getHouses)

    app.delete('api/house/:id', ctrl.deleteHouse)
    
})    
