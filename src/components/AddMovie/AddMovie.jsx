import React, { useState } from "react";
import "./AddMovie.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Grid, TextField, Button } from "@material-ui/core";
import { FormControl, Chip, Autocomplete, Stack } from "@mui/material";
import Select from 'react-select';

function AddMovie() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [poster, setPoster] = useState("");
    const [description, setDescription] = useState("");
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
    ]

    return (
        <div>
            <h2>Add New Movie</h2>
            <Stack direction="row" spacing={3}>
                <TextField required id="movie-title" onChange={changeTitle} label="Title" placeholder="Tropic Thunder" variant="standard"/>
                <TextField required id="movie-image-url" onChange={changeImageUrl} label="Image Url" placeholder="/images/tropic-thunder.jpg" variant="standard" />
                <TextField required id="movie-description" onChange={changeDescription} label="Description" placeholder="Funniest movie of all time!" variant="standard" />
                <Select
                    closeMenurOnSelect={false}
                    isMulti
                    options={genresArray}
                    onChange={(selected) => setGenres(selected)}
                    getOptionLabel={(genres) => genres.label}
                    placeholder="Select Genres"
                />
            </Stack>
            <Stack direction="row" mt={3} spacing={3} sx={{ width: 300 }}>
                <Button variant="outlined" color="secondary" onClick={() => history.push('/')}>Cancel</Button>
                <Button variant="contained" color="primary" onClick={addMoviePage}>Save</Button>
            </Stack>
        </div>
    );
}

export default AddMovie;
