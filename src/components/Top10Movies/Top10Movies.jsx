import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import MovieItem from '../MovieItem/MovieItem';
import loadingGif from '../../images/loading.gif';

function Top10Movies(props) {
	useEffect(() => {
		dispatch({ type: 'FETCH_TOP10_MOVIES_SAGA' });
	}, []);

	const history = useHistory();
	const dispatch = useDispatch();
	const top10Movies = useSelector((store) => store.top10Movies);

	const backToMovies = () => {
		history.push('/');
	};

	return (
		<div>
            {/* loading screen until this reducer has a value */}
			{top10Movies.length === 0 ? (
				<img src={loadingGif} />
			) : (
				<main>
                    {/* back to movies list button */}
					<Button onClick={backToMovies} variant="contained" color="secondary">
						Back to Movies List
					</Button>
					<Box mt={4}>
                        {/* container to hold all movie cards */}
						<Grid
							container
							display="flex"
							wrap="wrap"
							justify="center"
							spacing={4}
						>
                            {/* maps through 10 most likes movies in reducer */}
							{top10Movies.map((movie) => (
								<MovieItem key={movie.id} movie={movie} />
							))}
						</Grid>
					</Box>
				</main>
			)}
		</div>
	);
}

export default Top10Movies;
