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

    // pushes to the details page
	const showDetails = () => {
		history.push(`/details/${props.movie.id}`);
	};

    // on 'like' button click, run this to add 1 like to database for the movie based on id
	const likeMovie = () => {
		dispatch({ type: 'LIKE_MOVIE_SAGA', payload: props.movie.id });
	};

    // deletes the movie selected based on id
	const deleteMovie = () => {
		dispatch({ type: 'DELETE_MOVIE_SAGA', payload: props.movie.id });
	};

	return (
		<Grid item>
            {/* each item now that's a movie 'item' card */}
            <Card style={{border: "2px solid grey"}} sx={{ width: 270, maxHeight: 500 }}>
                {/* displays poster and can be clicked */}
				<CardActionArea onClick={showDetails}>
					<CardMedia
						component="img"
						height="350"
						image={props.movie.poster}
						alt={props.movie.title}
					/>
				</CardActionArea>
                {/* movie name in content area */}
				<CardContent>
					<Typography color="primary">{props.movie.title}</Typography>
				</CardContent>
                {/* card action buttons */}
				<CardActions>
					<Stack
						direction="row"
						divider={<Divider orientation="vertical" flexItem />}
						spacing={5.2}
					>
                        {/* likes button */}
						<Button
							onClick={likeMovie}
							size="small"
							variant="outlined"
							color="primary"
							style={{ width: 85 }}
						>
							Likes: {props.movie.likes}
						</Button>
                        {/* delete button */}
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
