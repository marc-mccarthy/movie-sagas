import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Box, Card, CardActions, CardContent, CardMedia, Grid, Paper, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import './MovieItem.css'

function MovieItem(props) {

    // const dispatch = useDispatch();
    const history = useHistory();

    const showDetails = () => {
        // dispatch({ type: 'THIS_MOVIE', payload: props.movie.id });
        history.push(`/details/${props.movie.id}`)
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'light' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(.5),
        textAlign: 'center',
        color: theme.palette.text.primary,
    }));

    const card = (
        <Button color="primary" onClick={showDetails}>
            <React.Fragment>
                <CardContent color="primary">
                    <Typography mb={1} variant="p" component="div">
                        {props.movie.title}
                    </Typography>
                    <CardMedia
                        component="img"
                        image={props.movie.poster}
                        alt={props.movie.title}
                    />
                    <CardActions>
                        <Button variant="contained" size="medium">Like</Button>
                        <Button variant="outlined" size="medium">Delete</Button>
                    </CardActions>
                </CardContent>
            </React.Fragment>
        </Button>
    );

    return (
        <Grid item>
            <Item>
                <Card
                    align="center"
                    justify="center"
                    sx={{ width: 300, height: 400}}>
                    {card}
                </Card>
            </Item>
        </Grid>
    )
}

export default MovieItem;