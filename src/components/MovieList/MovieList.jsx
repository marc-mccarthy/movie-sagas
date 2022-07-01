import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



function MovieList() {

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    return (
        <main>
            <h1><u>Movie List</u></h1>
            <Box className="movies">
                <Grid align="center" display="flex" justifyContent="center" container spacing={2}>
                    {movies.map(movie  => (<MovieItem key={movie.id} movie={movie}/>))}
                </Grid>
            </Box>
        </main>
    );
}

export default MovieList;
