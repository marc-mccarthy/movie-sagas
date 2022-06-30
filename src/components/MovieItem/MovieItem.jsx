import React from 'react';
import './MovieItem.css'
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function MovieItem(props) {

    const dispatch = useDispatch();
    const history = useHistory();

    const showDetails = () => {
        dispatch({type: 'THIS_MOVIE', payload: props.movie.id})
        history.push(`/details/:${props.movie.id}`)
    }

    return (
        <button className='movieItem' onClick={showDetails}>
            <h3>{props.movie.title}</h3>
            <img src={props.movie.poster} alt={props.movie.title}/>
        </button>
    )
}

export default MovieItem;