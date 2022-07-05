import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography } from "@material-ui/core";
import { Box, Stack, TextareaAutosize } from "@mui/material";
import Select from 'react-select';

function AddMovie() {

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES_SAGA' });
    }, []);

    const history = useHistory();
    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);

    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genresSelected, setGenresSelected] = useState([]);

    const addMoviePage = () => {
        dispatch({ type: 'ADD_MOVIE_SAGA', payload: { title: title, poster: poster, description: description, genres: genresSelected } });
        history.push('/');
    }

    const changeTitle = (event) => {
        setTitle(event.target.value);
    }

    const changeImageUrl = (event) => {
        setPoster(event.target.value);
    }

    const changeDescription = (event) => {
        setDescription(event.target.value);
    }

    return (
        <div>
            <Typography>
                <h2>Add New Movie</h2>
            </Typography>
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
                    mt={ 3 }
                    spacing={ 3 }
                >
                    <TextField
                        required id="movie-title"
                        autoFocus
                        onChange={ changeTitle }
                        label="Title"
                        defaultValue={ title }
                        placeholder="Tropic Thunder"
                        variant="standard"
                    />
                    <TextField
                        required id="movie-poster"
                        onChange={ changeImageUrl }
                        label="Image Url"
                        defaultValue={ poster }
                        placeholder="images/tropic-thunder.jpg"
                        variant="standard"
                    />
                    <Select
                        required id="movie-genres"
                        closeMenuOnSelect={ false }
                        isMulti
                        autosize
                        options={ genres }
                        onChange={ (selected) => setGenresSelected(selected) }
                        getOptionLabel={ (genre) => genre.name }
                        placeholder="Select Genres"
                    />
                </Stack>
                <Stack
                    spacing={ 2 }
                    justifyContent="center"
                    alignItems="center"
                >
                    <TextareaAutosize
                        required id="movie-description"
                        minRows={ 15 }
                        maxRows={ 20 }
                        onChange={ changeDescription }
                        aria-label="Description"
                        placeholder="Funniest movie of all time! Seen it too many times to count."
                        style={{ width: 500 }}
                    />
                </Stack>
                <Stack
                    direction="row"
                    mt={ 5 }
                    spacing={ 3 }
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
