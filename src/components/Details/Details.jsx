import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import { Stack } from '@mui/material';
import loadingGif from '../../images/loading.gif';
import Genres from '../Genres/Genres';
import './Details.css';

function Details(props) {
	useEffect(() => {
		dispatch({ type: 'THIS_MOVIE_SAGA', payload: id });
	}, []);

	const movie = useSelector((store) => store.thisMovie);

	const dispatch = useDispatch();
	const history = useHistory();

	const { id } = useParams();

	const editMovie = () => {
		history.push(`/editMovie/${id}`);
	};

	const backToMovies = () => {
		history.push('/');
	};

	return (
		<div>
			{movie.length === 0 ? (
				<img src={loadingGif} />
			) : (
				<div>
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
					<Typography variant="h5">{movie.movie.title}</Typography>
					<Stack direction="row" justifyContent="center">
						<img
							id="movieItemImage"
							src={movie.movie.poster}
							alt={movie.movie.title}
						/>
						<Stack alignContent="center">
							<Typography variant="h5">
								<ul>
									{movie.genres.map((genre) => {
										return <Genres genre={genre.name} />;
									})}
								</ul>
							</Typography>
							<p id="movieItemDescription">{movie.movie.description}</p>
							<Typography>
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
