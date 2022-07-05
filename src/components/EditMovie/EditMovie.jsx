import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import { Box, FormControl, Chip, Autocomplete, Stack, TextareaAutosize } from "@mui/material";
import Select from 'react-select';
import loadingGif from '../../images/loading.gif';

function EditMovie(props) {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'THIS_MOVIE_SAGA', payload: id });
        dispatch({ type: 'FETCH_GENRES_SAGA' });
    }, []);

    const { id } = useParams();

    const movie = useSelector(store => store.thisMovie)
    const genres = useSelector(store => store.genres);

    const [ title, setTitle ] = useState(movie.movie.title);
    const [ description, setDescription ] = useState(movie.movie.description);
    const [ genresSelected, setGenresSelected ] = useState(movie.genres);

    const editMoviePage = () => {
        dispatch({ type: 'UPDATE_MOVIE_SAGA', payload: { id: id, title: title, description: description, genres: genresSelected } });
        history.push('/');
    }

    const changeTitle = (event) => {
        setTitle(event.target.value);
        console.log(genresSelected)
    }

    const changeDescription = (event) => {
        setDescription(event.target.value);
    }

    return (
        <div>
            { movie.length === 0 || genres.length === 0 ? (<img src={ loadingGif } />) : (
                <div>
                    <Typography>
                        <h2>Edit Movie</h2>
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
                            mt={ 5 }
                            spacing={ 3 }
                            justifyContent="center"
                            alignItems="center"
                        >
                            <TextField
                                required id="movie-title"
                                autoFocus
                                value={ title }
                                onChange={ changeTitle }
                                label="Title"
                                variant="standard"
                                justify="center"
                            />
                            <Select
                                required id="movie-genres"
                                closeMenuOnSelect={ false }
                                isMulti
                                defaultValue={ genresSelected }
                                options={ genres }
                                onChange={ (selected) => setGenresSelected(selected) }
                                getOptionLabel={ (genre) => genre.name }
                                placeholder="Select Genres"
                            />
                        </Stack>
                        <Stack
                            spacing={2}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <TextareaAutosize
                                required id="movie-description"
                                value={ description }
                                minRows={ 15 }
                                maxRows={ 20 }
                                onChange={ changeDescription }
                                aria-label="Description"
                                style={{ width: 500 }}
                            />
                        </Stack>
                        <Stack
                            direction="row"
                            mt={ 5 }
                            spacing={ 3 }
                            justifyContent="center"
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
                                onClick={ editMoviePage }
                                style={{ width: 100 }}
                            >
                                Save
                            </Button>
                        </Stack>
                    </Box>
                </div>
            )}
        </div>
    )
}

export default EditMovie;
