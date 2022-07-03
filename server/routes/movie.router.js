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
    const query = `SELECT * FROM movies JOIN movies_genres ON movies.id = movies_genres.movie_id JOIN genres ON movies_genres.genre_id = genres.id WHERE movie_id=$1;`;
    pool.query(query, [ req.query.id ]).then(result => {
        res.send(result.rows)
    }).catch(error => {
        console.log(`ERROR: Get this movie: ${error}`)
        res.sendStatus(500);
    })
})

router.get('/top10Movies', (req, res) => {
    const query = `SELECT * FROM "movies" ORDER BY "likes" DESC LIMIT 10;`
    pool.query(query).then(result => {
        res.send(result.rows)
    }).catch(result => {
        console.log(`ERROR: Get this movie: ${error}`)
        res.sendStatus(500);
    })
})

router.post('/add', (req, res) => {
    // RETURNING "id" will give us back the id of the created movie
    const insertMovieQuery = `INSERT INTO "movies" ("title", "poster", "description") VALUES ($1, $2, $3) RETURNING "id";`
    // FIRST QUERY MAKES MOVIE
    pool.query(insertMovieQuery, [ req.body.title, req.body.poster, req.body.description ]).then(result => {
        console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
        const createdMovieId = result.rows[0].id;
        // Now handle the genre reference
        // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
        req.body.genres.forEach(genre => {
            const insertGenreQuery = `INSERT INTO "movies_genres" ("movie_id", "genre_id") VALUES ($1, $2);`
            pool.query(insertGenreQuery, [ createdMovieId, genre.value ]).then(result => {
                res.sendStatus(200);
            }).catch(error => {
                console.log(`ERROR: Added Genre: ${error}`);
                res.sendStatus(500);
            })
        })
// Catch for first query
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
})

router.put('/update', (req, res) => {
    console.log(req.body);
    const query = `UPDATE "movies" SET title = $1, description = $2 WHERE id = $3;`;
    pool.query(query, [ req.body.title, req.body.description, req.body.id ]).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(`ERROR: Update Movie: ${error}`);
        res.sendStatus(500);
    })
})

router.put('/like', (req, res) => {
    const query = `UPDATE "movies" SET "likes" = "likes" + 1 WHERE "id" = $1;`;
    pool.query(query, [req.query.id]).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(`ERROR: Like Movie: ${error}`);
        res.sendStatus(500);
    })
})

router.delete('/delete', (req, res) => {
    console.log(req.query.id);
    const queryGenres = `DELETE FROM "movies_genres" WHERE "movie_id" = $1;`;
    pool.query(queryGenres, [req.query.id]).then(result => {
        const query = `DELETE FROM "movies" WHERE "id" = $1;`;
        pool.query(query, [ req.query.id ]).then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log(`ERROR: Delete Movie: ${error}`);
            res.sendStatus(500);
        })
    }).catch( error => {
        console.log(`ERROR: Delete Movie: ${error}`);
        res.sendStatus(500);
    })
})

module.exports = router;
