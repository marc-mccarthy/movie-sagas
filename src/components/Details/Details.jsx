import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import { Stack } from '@mui/material';
import loadingGif from '../../images/loading.gif';
import './Details.css';

function Details(props) {
    // getting this movie on page load
	useEffect(() => {
		dispatch({ type: 'THIS_MOVIE_SAGA', payload: id });
	}, []);

    // storing the current movie based on id
	const movie = useSelector((store) => store.thisMovie);

	const dispatch = useDispatch();
	const history = useHistory();

    // grabs the id from the url
	const { id } = useParams();

    // pushes to the edit movie page
	const editMovie = () => {
		history.push(`/editMovie/${id}`);
	};

    // pushes to the movie list page
	const backToMovies = () => {
		history.push('/');
	};

	return (
		<div>
            {/* loading screen until this reducer has a value */}
			{movie.length === 0 ? (
				<img src={loadingGif} />
			) : (
				<div>
                    {/* back to movies list button */}
					<Stack mb={3} direction="row" spacing={3} justifyContent="center">
						<Button
							onClick={backToMovies}
							variant="contained"
							color="secondary"
							style={{ width: 180 }}
						>
							Back to Movies List
						</Button>
					</Stack>
                    {/* movie title */}
					<Typography variant="h5">{movie.movie.title}</Typography>
                    {/* horizontal display of poster and description */}
					<Stack mt={3} direction="row" justifyContent="center">
						<img
							id="movieItemImage"
							src={movie.movie.poster}
							alt={movie.movie.title}
						/>
						<Stack alignContent="center">
                            {/* loads all genres on the page for specific movie */}
							<Typography variant="h5">
								<ul>
									{movie.genres.map((genre) => {
										return <li>{genre.name}</li>;
									})}
								</ul>
                            {/* movie description */}
							</Typography>
                                <p id="movieItemDescription">{movie.movie.description}</p>
							<Typography>
                                {/* edit movie button */}
								<Button
									onClick={editMovie}
									variant="contained"
									color="primary"
									style={{ width: 120 }}
								>
									Edit Movie
								</Button>
							</Typography>
						</Stack>
					</Stack>
				</div>
			)}
		</div>
	);
}

export default Details;
