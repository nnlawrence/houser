module.exports = {
    getHouses: (req, res) => {
        req.app.get('db').get_houses()
        .then(house => res.status(200).send(house))
        .catch(err => res.status(500).send({errorMessage: 'error'}, console.log(err))) 
    }
}