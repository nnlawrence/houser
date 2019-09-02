async function saveData (db) {
    db.houses.insert({name: 'testname', address: 'Johny', city: 'Orem', state: 'UT', zipcode: '84343'}, (err, res) => {
        try {
            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
            return err;
        }
    });
}