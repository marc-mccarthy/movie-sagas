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
        console.log(id)
        dispatch({ type: 'THIS_MOVIE_SAGA', payload: id });
    }, []);

    const { id } = useParams();

    const movie = useSelector(store => store.thisMovie)

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const editMoviePage = () => {
        dispatch({ type: 'ADD_MOVIE_SAGA', payload: { title: title, description: description }});
        history.push('/');
    }

    const changeTitle = (event) => {
        setTitle(event.target.value);
    }

    const changeDescription = (event) => {
        setDescription(event.target.value);
    }

    return (
        <div>
            { movie.length === 0 ? (<img src={ loadingGif } />) : (
                <div>
                    <Typography color="primary">
                        <h2>Edit Movie</h2>
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
                                value={ movie[0].title }
                                onChange={ changeTitle }
                                label="Title"
                                variant="standard"
                            />
                        </Stack>

                        <Stack spacing={ 2 }>
                            <TextareaAutosize
                                required id="movie-description"
                                value={ movie[0].description }
                                minRows={ 15 }
                                maxRows={ 20 }
                                onChange={ changeDescription }
                                aria-label="Description"
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
                                onClick={ editMoviePage }>
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
