const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// gets all movies in alphabetical order
router.get('/', (req, res) => {
	pool
		.query(`SELECT * FROM "movies" ORDER BY "title" ASC`)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((error) => {
			console.log(`ERROR: Get all movies: ${error}`);
			res.sendStatus(500);
		});
});

// gets the one movie with all rows of genres in movies_genres table
router.get('/details', (req, res) => {
	pool
		.query(
			`SELECT * FROM movies JOIN movies_genres ON movies.id = movies_genres.movie_id JOIN genres ON movies_genres.genre_id = genres.id WHERE movie_id=$1;`,
			[req.query.id]
		)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((error) => {
			console.log(`ERROR: Get this movie: ${error}`);
			res.sendStatus(500);
		});
});

// gets top 10 movies based on integer of likes
router.get('/top10Movies', (req, res) => {
	pool
		.query(`SELECT * FROM "movies" ORDER BY "likes" DESC LIMIT 10;`)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((result) => {
			console.log(`ERROR: Get this movie: ${error}`);
			res.sendStatus(500);
		});
});

// creates new movie in database
router.post('/add', (req, res) => {
	// RETURNING "id" will give us back the id of the created movie
	// FIRST QUERY MAKES MOVIE
	pool
		.query(`INSERT INTO "movies" ("title", "poster", "description") VALUES ($1, $2, $3) RETURNING "id";`, [
			req.body.title,
			req.body.poster,
			req.body.description,
		])
		.then((result) => {
			console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
			const createdMovieId = result.rows[0].id;
			// Now handle the genre reference
			// SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
            // loops through the genres array and adds each genre to the database based on movie id
			req.body.genresSelected.forEach((genre) => {
				pool
					.query(`INSERT INTO "movies_genres" ("movie_id", "genre_id") VALUES ($1, $2);`, [createdMovieId, genre.value])
					.then((result) => {})
					.catch((error) => {
						console.log(`ERROR: Added Genre: ${error}`);
						res.sendStatus(500);
					});
			});
			// Catch for first query
		})
		.catch((error) => {
			console.log(error);
			res.sendStatus(500);
		});
});

// updates movie in the database
router.put('/update', (req, res) => {
	pool
		.query(`UPDATE "movies" SET title = $1, description = $2 WHERE id = $3;`, [
			req.body.title,
			req.body.description,
			req.body.id,
		])
		.then((result) => {})
		.catch((error) => {
			console.log(`ERROR: Update movie basics error: ${error}`);
			res.sendStatus(500);
		});
	// Now handle the genre references
	// deletes all genre references based on the movie id
	pool
		.query(`DELETE FROM "movies_genres" WHERE movie_id = $1;`, [req.body.id])
		.then((result) => {})
		.catch((error) => {
			console.log(`ERROR: Delete movie genres error: ${error}`);
			res.sendStatus(500);
		});
	// loops through the genres array and adds each genre to the database based on movie id
	req.body.genresSelected.forEach((genre) => {
		pool
			.query(
				`INSERT INTO "movies_genres" ("movie_id", "genre_id") VALUES ($1, $2);`,
				[req.body.id, genre.value]
			)
			.then((result) => {})
			.catch((error) => {
				console.log(`ERROR: Update movie genres in Loop: ${error}`);
				res.sendStatus(500);
			});
	});
	res.sendStatus(200);
});

// updates likes incrementally for the movie selected
router.put('/like', (req, res) => {
	pool
		.query(`UPDATE "movies" SET "likes" = "likes" + 1 WHERE "id" = $1;`, [
			req.query.id,
		])
		.then((result) => {
			res.sendStatus(200);
		})
		.catch((error) => {
			console.log(`ERROR: Like Movie: ${error}`);
			res.sendStatus(500);
		});
});

// deletes the movie from the database
router.delete('/delete', (req, res) => {
	// deletes all movie_id associated genres first
	pool
		.query(`DELETE FROM "movies_genres" WHERE "movie_id" = $1;`, [req.query.id])
		.then((result) => {
            // deletes the movie from the movies database second
			pool
				.query(`DELETE FROM "movies" WHERE "id" = $1;`, [req.query.id])
				.then((result) => {
					res.sendStatus(200);
				})
				.catch((error) => {
					console.log(`ERROR: Delete Movie: ${error}`);
					res.sendStatus(500);
				});
		})
		.catch((error) => {
			console.log(`ERROR: Delete Movie: ${error}`);
			res.sendStatus(500);
		});
});

module.exports = router;
