import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
import { Box, Stack } from '@mui/material';
import MovieItem from '../MovieItem/MovieItem';
import loadingGif from '../../images/loading.gif';

function MovieList(props) {
    // getting all movies and all genres on page load
	useEffect(() => {
		dispatch({ type: 'FETCH_MOVIES_SAGA' });
		dispatch({ type: 'FETCH_GENRES_SAGA' });
	}, []);

    // storing all movies and all genres from the server
	const movies = useSelector((store) => store.movies);
	const genres = useSelector((store) => store.genres);

	const history = useHistory();
	const dispatch = useDispatch();

    // pushes to the add movie page
	const addMoviePage = () => {
		history.push('/addMovie');
	};

    // pushes to the top 10 page
	const top10Movies = () => {
		history.push('/top10');
	};

	return (
		<div>
            {/* loading screen until both reducers have a value */}
			{movies.length === 0 || genres.length === 0 ? (
				<img src={loadingGif} />
			) : (
				<main>
                    {/* add movie button */}
					<Stack direction="row" spacing={3} justifyContent="center" mb={3}>
						<Button
							onClick={addMoviePage}
							variant="contained"
							color="secondary"
							style={{ width: 140 }}
						>
							Add Movie
						</Button>
                        {/* top 10 movies button */}
						<Button
							onClick={top10Movies}
							variant="contained"
							color="secondary"
							style={{ width: 140 }}
						>
							Top 10 Movies
						</Button>
					</Stack>
					<Typography variant="h6">
                        {/* container to hold all genres */}
						<Grid
							container
							display="flex"
							wrap="wrap"
							justify="center"
							spacing={2}
						>
                            {/* maps through all genres from the reducer */}
							{genres.map((genre) => (
								<Grid item key={genre.id}>
									{genre.name}
								</Grid>
							))}
						</Grid>
					</Typography>
                    {/* container to hold all movie cards */}
					<Box mt={4}>
						<Grid
							container
							display="flex"
							wrap="wrap"
							justify="center"
							spacing={6}
						>
                            {/* maps through all movies from the reducer */}
							{movies.map((movie) => (
								<MovieItem key={movie.id} movie={movie} />
							))}
						</Grid>
					</Box>
				</main>
			)}
		</div>
	);
}

export default MovieList;
