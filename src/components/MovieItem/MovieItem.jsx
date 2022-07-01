import React from 'react';
import './MovieItem.css'
import {useHistory} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    }));

    return (
        <Grid item>
            <Item>
                <button className='movieItem' onClick={showDetails}>
                    <h3>{props.movie.title}</h3>
                    <img src={props.movie.poster} alt={props.movie.title}/>
                </button>
            </Item>
        </Grid>
    )
}

export default MovieItem;