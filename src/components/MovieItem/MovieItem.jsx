import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	Grid,
	Stack,
} from '@mui/material';
import './MovieItem.css';

function MovieItem(props) {
	const history = useHistory();
	const dispatch = useDispatch();

	const showDetails = () => {
		history.push(`/details/${props.movie.id}`);
	};

	const likeMovie = () => {
		dispatch({ type: 'LIKE_MOVIE_SAGA', payload: props.movie.id });
	};

	const deleteMovie = () => {
		dispatch({ type: 'DELETE_MOVIE_SAGA', payload: props.movie.id });
	};

	return (
		<Grid item>
			<Card sx={{ width: 270, maxHeight: 500 }}>
				<CardActionArea onClick={showDetails}>
					<CardMedia
						component="img"
						height="350"
						image={props.movie.poster}
						alt={props.movie.title}
					/>
				</CardActionArea>
				<CardContent>
					<Typography color="primary">{props.movie.title}</Typography>
				</CardContent>
				<CardActions>
					<Stack
						direction="row"
						divider={<Divider orientation="vertical" flexItem />}
						spacing={5.2}
					>
						<Button
							onClick={likeMovie}
							size="small"
							variant="outlined"
							color="primary"
							style={{ width: 85 }}
						>
							Likes: {props.movie.likes}
						</Button>
						<Button
							onClick={deleteMovie}
							size="small"
							variant="outlined"
							color="secondary"
							style={{ width: 85 }}
						>
							Delete
						</Button>
					</Stack>
				</CardActions>
			</Card>
		</Grid>
	);
}

export default MovieItem;
