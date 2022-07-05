import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Typography } from '@material-ui/core';
import { Box, Stack, TextareaAutosize } from '@mui/material';
import Select from 'react-select';

function AddMovie() {
	useEffect(() => {
		dispatch({ type: 'FETCH_GENRES_SAGA' });
	}, []);

	const history = useHistory();
	const dispatch = useDispatch();
	const genres = useSelector((store) => store.genres);

	const [title, setTitle] = useState('');
	const [poster, setPoster] = useState('');
	const [description, setDescription] = useState('');
	const [genresSelected, setGenresSelected] = useState([]);

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
			<Box
				component="form"
				sx={{
					'& .MuiTextField-root': { m: 4, width: '30ch' },
				}}
				noValidate
				autoComplete="off"
				justify="center"
			>
				<Stack
					direction="row"
					justifyContent="center"
                    alignItems="center"
					mt={3}
					spacing={3}
				>
					<TextField
						label="Title"
						required
						id="movie-title"
						autoFocus
						defaultValue={title}
						onChange={changeTitle}
						placeholder="Tropic Thunder"
						variant="standard"
						error={title.length === 0}
						helperText={title.length === 0 ? 'Title is required' : ''}
					/>
					<TextField
						label="Poster"
						required
						id="movie-poster"
						defaultValue={poster}
						onChange={changeImageUrl}
						placeholder="images/tropic-thunder.jpg"
						variant="standard"
						error={poster.length === 0}
						helperText={poster.length === 0 ? 'Poster is required' : ''}
					/>
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
						error={genresSelected.length === 0}
					/>
				</Stack>
				<Stack spacing={2} justifyContent="center" alignItems="center">
					<TextareaAutosize
						label="Description"
						required
						id="movie-description"
						minRows={15}
						maxRows={20}
						onChange={changeDescription}
						placeholder="Funniest movie of all time! Seen it too many times to count."
						style={{ width: 500 }}
						error={description.length === 0}
					/>
				</Stack>
				<Stack
					direction="row"
					mt={5}
					spacing={3}
					justifyContent="center"
					alignItems="center"
				>
					<Button
						variant="contained"
						color="secondary"
						onClick={() => history.push('/')}
						style={{ width: 100 }}
					>
						Cancel
					</Button>
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
