import React, { useState } from "react";
import "./AddMovie.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import { Box, FormControl, Chip, Autocomplete, Stack, TextareaAutosize } from "@mui/material";
import Select from 'react-select';

function AddMovie() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [title, setTitle] = useState("Tropic Thunder");
    const [poster, setPoster] = useState("images/tropic-thunder.jpg");
    const [description, setDescription] = useState("Funniest movie of all time!");
    const [genres, setGenres] = useState([]);

    const addMoviePage = () => {
        dispatch({ type: 'ADD_MOVIE_SAGA', payload: { title: title, poster: poster, description: description, genres: genres } });
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

    const genresArray = [
        { label: 'Adventure', value: 1 },
        { label: 'Animated', value: 2 },
        { label: 'Biographical', value: 3 },
        { label: 'Comedy', value: 4 },
        { label: 'Disaster', value: 5 },
        { label: 'Drama', value: 6 },
        { label: 'Epic', value: 7 },
        { label: 'Fantasy', value: 8 },
        { label: 'Musical', value: 9 },
        { label: 'Romantic', value: 10 },
        { label: 'Science Fiction', value: 11 },
        { label: 'Space Opera', value: 12 },
        { label: 'Superhero', value: 13 },
    ];

    return (
        <div>
            <Typography color="primary">
                <h2>Add New Movie</h2>
            </Typography>

            <Box
                component="form"
                sx={{'& .MuiTextField-root': { m: 4, width: '30ch' },}}
                noValidate
                autoComplete="off"
                align="center"
            >
                <Stack direction="row" mt={5} spacing={3} sx={{ width: 1000 }}>
                    <TextField
                        required id="movie-title"
                        onChange={changeTitle}
                        label="Title"
                        defaultValue={title}
                        placeholder="Tropic Thunder"
                        variant="standard"
                    />
                    <TextField
                        required id="movie-image-url"
                        onChange={changeImageUrl}
                        label="Image Url"
                        defaultValue="images/tropic-thunder.jpg"
                        placeholder="images/tropic-thunder.jpg"
                        variant="standard"
                    />
                    <Select
                        required id="movie-genres"
                        closeMenurOnSelect={false}
                        isMulti
                        options={genresArray}
                        onChange={(selected) => setGenres(selected)}
                        getOptionLabel={(genres) => genres.label}
                        placeholder="Select Genres"
                    />
                </Stack>

                <Stack spacing={2}>
                    <TextareaAutosize
                        required id="movie-description"
                        minRows={5}
                        maxRows={10}
                        onChange={changeDescription}
                        aria-label="Description"
                        defaultValue="Funniest movie of all time!"
                        placeholder="Funniest movie of all time!"
                        style={{ width: 500 }}
                    />
                </Stack>

                <Stack direction="row" mt={5} spacing={3} sx={{ width: 1000 }}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => history.push('/')}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={addMoviePage}>
                        Save
                    </Button>
                </Stack>

            </Box>
        </div>
    );
}

export default AddMovie;
