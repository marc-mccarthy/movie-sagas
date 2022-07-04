import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography } from "@material-ui/core";
import { Box, Stack, TextareaAutosize } from "@mui/material";
import Select from 'react-select';
import { ContentCutOutlined } from "@mui/icons-material";

function AddMovie() {

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES_SAGA' });
    }, []);

    const history = useHistory();
    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);

    const [title, setTitle] = useState("Tropic Thunder");
    const [poster, setPoster] = useState("images/tropic-thunder.jpg");
    const [description, setDescription] = useState("Funniest movie of all time!");
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
                        autoFocus
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
                        closeMenuOnSelect={false}
                        isMulti
                        options={ genres }
                        onChange={ (selected) => setGenresSelected(selected) }
                        getOptionLabel={ (genre) => genre.name }
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
