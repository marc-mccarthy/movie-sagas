import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Typography } from '@material-ui/core';
import { Box, Stack, TextareaAutosize } from '@mui/material';
import Select from 'react-select';

function AddMovie() {
	// getting all genres from server on page load
	useEffect(() => {
		dispatch({ type: 'FETCH_GENRES_SAGA' });
	}, []);

	// storing all genres from server
	const genres = useSelector((store) => store.genres);

	const history = useHistory();
	const dispatch = useDispatch();

	// held states for movie title, poster, description, and genres the movie currently holds
	const [title, setTitle] = useState('');
	const [poster, setPoster] = useState('');
	const [description, setDescription] = useState('');
	const [genresSelected, setGenresSelected] = useState([]);

	// checks validitdy of the inputs for empty values and sends object to the server
	const addMoviePage = () => {
		title.length === 0 ||
		poster.length === 0 ||
		description.length === 0 ||
		genresSelected.length === 0
			? alert('Please fill all fields')
			: dispatch({
					type: 'ADD_MOVIE_SAGA',
					payload: { title, poster, description, genresSelected },
			  }) && history.push('/');
	};

	// stores the current input values into the held states
	const changeTitle = (event) => {
		setTitle(event.target.value);
	};
	const changeImageUrl = (event) => {
		setPoster(event.target.value);
	};
	const changeDescription = (event) => {
		setDescription(event.target.value);
	};

	return (
		<div>
			<Typography variant="h5">Add New Movie</Typography>
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
					justifyContent="center"
					alignItems="center"
					mt={3}
					spacing={3}
				>
					{/* movie title field */}
					<TextField
						label="Title"
						required
						id="movie-title"
						autoFocus
						defaultValue={title}
						onChange={changeTitle}
						placeholder="Tropic Thunder"
						variant="standard"
					/>
					{/* movie poster field */}
					<TextField
						label="Poster"
						required
						id="movie-poster"
						defaultValue={poster}
						onChange={changeImageUrl}
						placeholder="images/tropic-thunder.jpg"
						variant="standard"
					/>
					{/* all genres field */}
					<Select
						label="Genres"
						required
						id="movie-genres"
						closeMenuOnSelect={false}
						isMulti
						autosize
						options={genres}
						getOptionLabel={(genre) => genre.name}
						onChange={(selected) => setGenresSelected(selected)}
						placeholder="Select Genres"
					/>
				</Stack>
                {/* second row */}
				<Stack spacing={2} justifyContent="center" alignItems="center">
					{/* movie description field */}
					<TextareaAutosize
						label="Description"
						required
						id="movie-description"
						minRows={15}
						maxRows={20}
						onChange={changeDescription}
						placeholder="Funniest movie of all time! Seen it too many times to count."
						style={{ width: 500 }}
					/>
				</Stack>
				{/* third row */}
				<Stack direction="row" mt={5} spacing={3} justifyContent="center">
					{/* cancel button */}'
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
						onClick={addMoviePage}
						style={{ width: 100 }}
					>
						Save
					</Button>
				</Stack>
			</Box>
		</div>
	);
}

export default AddMovie;
