import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Typography } from '@material-ui/core';
import { Box, FormControl, Stack, TextareaAutosize } from '@mui/material';
import Select from 'react-select';
import loadingGif from '../../images/loading.gif';

function EditMovie(props) {
    // getting this movie on page load and all genres for all movies
	useEffect(() => {
        console.log(id);
		dispatch({ type: 'THIS_MOVIE_SAGA', payload: id });
		dispatch({ type: 'FETCH_GENRES_SAGA' });
	}, []);

    // storing the current movie based on id and storing all genres from the server
	const movie = useSelector((store) => store.thisMovie);
	const genres = useSelector((store) => store.genres);

	const dispatch = useDispatch();
	const history = useHistory();

    // grabs the id from the url
	const { id } = useParams();

    // held states for movie title, description, and genres the movie currently holds
	const [title, setTitle] = useState(movie.movie.title);
	const [description, setDescription] = useState(movie.movie.description);
	const [genresSelected, setGenresSelected] = useState(movie.genres);

    // checks validitdy of the inputs for empty values and sends object to the server
	const editMoviePage = () => {
		title.length === 0 ||
		description.length === 0 ||
		genresSelected.length === 0
			? alert('Please fill all fields')
			: dispatch({
					type: 'UPDATE_MOVIE_SAGA',
					payload: { id, title, description, genresSelected },
			  }) && history.push('/');
	};

    // stores the current input values into the held states
	const changeTitle = (event) => {
		setTitle(event.target.value);
	};
	const changeDescription = (event) => {
		setDescription(event.target.value);
	};

	return (
		<div>
            {/* loading screen until both reducers have a value */}
			{movie.length === 0 || genres.length === 0 ? (
				<img src={loadingGif} />
			) : (
				<div>
					<Typography variant="h5">Edit Movie</Typography>
                    {/* form for all inputs */}
					<Box
						component="form"
						sx={{
							'& .MuiTextField-root': { m: 4, width: '30ch' },
						}}
						noValidate
						autoComplete="off"
						justify="center"
					>
                        {/* first row */}
						<Stack
							direction="row"
							mt={5}
							spacing={3}
							justifyContent="center"
							alignItems="center"
						>
                            {/* movie title field */}
							<TextField
								required
								id="movie-title"
								autoFocus
								value={title}
								onChange={changeTitle}
								label="Title"
								variant="standard"
							/>
                            {/* all genres field */}
							<Select
								required
								id="movie-genres"
								closeMenuOnSelect={false}
								isMulti
								defaultValue={genresSelected}
								options={genres}
								onChange={(selected) => setGenresSelected(selected)}
								getOptionLabel={(genre) => genre.name}
								placeholder="Select Genres"
							/>
						</Stack>
                        {/* second row */}
						<Stack spacing={2} justifyContent="center" alignItems="center">
                            {/* movie description field */}
							<TextareaAutosize
								required
								id="movie-description"
								value={description}
								minRows={15}
								maxRows={20}
								onChange={changeDescription}
								aria-label="Description"
								style={{ width: 500 }}
							/>
						</Stack>
                        {/* third row */}
						<Stack direction="row" mt={5} spacing={3} justifyContent="center">
                            {/* cancel button */}
							<Button
								variant="contained"
								color="secondary"
								onClick={() => history.push('/')}
								style={{ width: 100 }}
							>
								Cancel
							</Button>
                            {/* save button */}
							<Button
								variant="contained"
								color="primary"
								onClick={editMoviePage}
								style={{ width: 100 }}
							>
								Save
							</Button>
						</Stack>
					</Box>
				</div>
			)}
		</div>
	);
}

export default EditMovie;
