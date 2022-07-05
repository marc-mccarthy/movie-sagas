const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// gets all movie genres available
router.get('/', (req, res) => {
    const query = `SELECT * FROM "genres"`;
    pool.query(query).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log(`ERROR: Get all genres: ${error}`);
        res.sendStatus(500);
    })
});

module.exports = router;
