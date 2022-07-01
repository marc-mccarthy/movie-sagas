import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Box, Grid, Typography } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    const addMoviePage = () => {
        history.push('/addMovie');
    }

    return (
        <main>
            <Button variant="contained" color="primary" onClick={addMoviePage}>Add Movie</Button>
            <Box mt={2}>
                <Grid container justify="space-around" spacing={2}>
                    {movies.map(movie  => (<MovieItem key={movie.id} movie={movie}/>))}
                </Grid>
            </Box>
        </main>
    );
}

export default MovieList;
