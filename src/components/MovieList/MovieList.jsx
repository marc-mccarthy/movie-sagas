import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
import { Box, Paper, styled } from '@mui/material';
import MovieItem from '../MovieItem/MovieItem';
import loadingGif from '../../images/loading.gif';

function MovieList(props) {

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES_SAGA' });
    }, []);

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    const addMoviePage = () => {
        history.push('/addMovie');
    }

    const top10Movies = () => {
        history.push('/top10');
    }

    return (
        <div>
            { movies.length === 0 ? (<img src={ loadingGif } />) : (
                <main>
                    <Button
                        onClick={ addMoviePage }
                        variant="contained"
                        color="secondary">
                        Add Movie
                    </Button>
                    <Button
                        onClick={ top10Movies }
                        variant="contained"
                        color="secondary">
                        Top 10 Movies
                    </Button>
                    <Box
                        mt={4}
                    >
                        <Grid
                            container
                            display="flex"
                            wrap="wrap"
                            justify="center"
                            spacing={6}>
                            {movies.map(movie  => (<MovieItem key={movie.id} movie={movie}/>))}
                        </Grid>
                    </Box>
                </main>
            )}
        </div>
    );
}

export default MovieList;
