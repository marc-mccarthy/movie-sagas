import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Grid, Paper, Stack, styled } from '@mui/material';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import './MovieItem.css'

function MovieItem( props ) {

    const history = useHistory();
    const dispatch = useDispatch();

    const showDetails = () => {
        history.push(`/details/${props.movie.id}`)
    }

    const likeMovie = () => {
        dispatch({ type: 'LIKE_MOVIE_SAGA', payload: props.movie.id });
    }

    const deleteMovie = () => {
        dispatch({ type: 'DELETE_MOVIE_SAGA', payload: props.movie.id });
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'light' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.primary,
    }));

    return (
        <Grid item>
            <Item >
                <Card
                    align="center"
                    justify="center"
                    sx={{ width: 250, height: 450 }}
                >
                    <CardActionArea
                        onClick={showDetails}>
                        <CardMedia
                            component="img"
                            height="350"
                            image={props.movie.poster}
                            alt={props.movie.title}
                        />
                    </CardActionArea>
                    <CardContent>
                        <Typography color="primary">
                            {props.movie.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={2}
                        >
                            <Item>
                                <Button
                                    onClick={likeMovie}
                                    size="small"
                                    variant="contained"
                                    color="primary">
                                    Like
                                </Button>
                            </Item>
                            <Item>
                                <Button
                                    onClick={deleteMovie}
                                    size="small"
                                    variant="outlined"
                                    color="secondary">
                                    Delete
                                </Button>
                            </Item>
                        </Stack>
                    </CardActions>
                </Card>
            </Item>
        </Grid>
    )
}

export default MovieItem;