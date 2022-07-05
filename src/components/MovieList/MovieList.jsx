import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
import { Box, Stack } from '@mui/material';
import MovieItem from '../MovieItem/MovieItem';
import loadingGif from '../../images/loading.gif';

function MovieList(props) {

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES_SAGA' });
        dispatch({ type: 'FETCH_GENRES_SAGA' })
    }, []);

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres)

    const addMoviePage = () => {
        history.push('/addMovie');
    }

    const top10Movies = () => {
        history.push('/top10');
    }

    return (
        <div>
            { movies.length === 0 || genres.length === 0 ? (<img src={ loadingGif } />) : (
                <main>
                    <Stack
                        direction="row"
                        spacing={ 3 }
                        justifyContent="center"
                    >
                        <Button
                            onClick={ addMoviePage }
                            variant="contained"
                            color="secondary"
                            style={{ width: 140 }}
                        >
                            Add Movie
                        </Button>
                        <Button
                            onClick={ top10Movies }
                            variant="contained"
                            color="secondary"
                            style={{ width: 140 }}
                        >
                            Top 10 Movies
                        </Button>
                    </Stack>
                        <Typography>
                            <Stack
                                m={ 2 }
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={ 3 }
                            >
                                    { genres.map(genre => (<h4>{ genre.name }</h4>)) }
                            </Stack>
                        </Typography>
                    <Box
                        mt={ 4 }
                    >
                        <Grid
                            container
                            display="flex"
                            wrap="wrap"
                            justify="center"
                            spacing={ 6 }
                        >
                                { movies.map(movie  => (<MovieItem key={ movie.id } movie={ movie }/>)) }
                        </Grid>
                    </Box>
                </main>
            )}
        </div>
    );
}

export default MovieList;
