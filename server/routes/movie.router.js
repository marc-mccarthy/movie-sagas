const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const query = `SELECT * FROM "movies" ORDER BY "title" ASC`;
    pool.query(query).then( result => {
        res.send(result.rows);
    }).catch(error => {
        console.log(`ERROR: Get all movies: ${error}`);
        res.sendStatus(500);
    })
});

router.get('/details', (req, res) => {
    const query = `SELECT * FROM movies WHERE id=$1;`;
    const values = [req.query.id];
    pool.query(query, values).then(result => {
        // console.log(result.rows)
        res.send(result.rows)
    }).catch(error => {
        console.log(`ERROR: Get this movie: ${error}`)
    })
})

router.post('/', (req, res) => {
    console.log(req.body);
    // RETURNING "id" will give us back the id of the created movie
    const insertMovieQuery = `INSERT INTO "movies" ("title", "poster", "description") VALUES ($1, $2, $3) RETURNING "id";`    
    // FIRST QUERY MAKES MOVIE
    pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description]).then(result => {
        console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
        const createdMovieId = result.rows[0].id;
        // Now handle the genre reference
        const insertMovieGenreQuery = `INSERT INTO "movies_genres" ("movie_id", "genre_id")VALUES  ($1, $2);`
        // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
        pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
            //Now that both are done, send back success!
            res.sendStatus(201);
        }).catch(error => {
            // catch for second query
            console.log(error);
            res.sendStatus(500);
        })
// Catch for first query
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
