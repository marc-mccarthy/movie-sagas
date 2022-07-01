import React from 'react';
import './MovieItem.css'
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
    }));

    const card = (
        <Button color="primary" onClick={showDetails}>
        <React.Fragment>
            <CardContent color="primary">
                <Typography variant="p" component="div">
                    <h3>{props.movie.title}</h3>
                </Typography>
                <img src={props.movie.poster} alt={props.movie.title}/>
            </CardContent>
        </React.Fragment>
        </Button>
    );

    return (
        <Grid item>
            <Item>
                <Card align="center" sx={{ width: 270, height: 400 }}>{card}</Card>
            </Item>
        </Grid>
    )
}

export default MovieItem;