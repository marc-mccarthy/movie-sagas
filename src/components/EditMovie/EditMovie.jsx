import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Typography } from '@material-ui/core';
import { Box, FormControl, Stack, TextareaAutosize } from '@mui/material';
import Select from 'react-select';
import loadingGif from '../../images/loading.gif';

function EditMovie(props) {
	useEffect(() => {
		dispatch({ type: 'THIS_MOVIE_SAGA', payload: id });
		dispatch({ type: 'FETCH_GENRES_SAGA' });
	}, []);

	const movie = useSelector((store) => store.thisMovie);
	const genres = useSelector((store) => store.genres);

	const dispatch = useDispatch();
	const history = useHistory();

	const { id } = useParams();

	const [title, setTitle] = useState(movie.movie.title);
	const [description, setDescription] = useState(movie.movie.description);
	const [genresSelected, setGenresSelected] = useState(movie.genres);

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

	const changeTitle = (event) => {
		setTitle(event.target.value);
	};

	const changeDescription = (event) => {
		setDescription(event.target.value);
	};

	return (
		<div>
			{movie.length === 0 || genres.length === 0 ? (
				<img src={loadingGif} />
			) : (
				<div>
					<Typography variant="h5">Edit Movie</Typography>
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
							mt={5}
							spacing={3}
							justifyContent="center"
							alignItems="center"
						>
							<TextField
								required
								id="movie-title"
								autoFocus
								value={title}
								onChange={changeTitle}
								error={title.length === 0}
								helperText={title.length === 0 ? 'Title is required' : ''}
								label="Title"
								variant="standard"
							/>
							<Select
								required
								id="movie-genres"
								closeMenuOnSelect={false}
								isMulti
								error={genresSelected.length === 0}
								helperText={
									genresSelected.length === 0 ? 'Genres are required' : ''
								}
								defaultValue={genresSelected}
								options={genres}
								onChange={(selected) => setGenresSelected(selected)}
								getOptionLabel={(genre) => genre.name}
								placeholder="Select Genres"
							/>
						</Stack>
						<Stack spacing={2} justifyContent="center" alignItems="center">
							<TextareaAutosize
								required
								id="movie-description"
								value={description}
								minRows={15}
								maxRows={20}
								error={description.length === 0}
								helperText={
									description.length === 0 ? 'Description is required' : ''
								}
								onChange={changeDescription}
								aria-label="Description"
								style={{ width: 500 }}
							/>
						</Stack>
						<Stack direction="row" mt={5} spacing={3} justifyContent="center">
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
