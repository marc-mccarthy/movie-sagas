import React from 'react';
import './Details.css'
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import GenresItem from '../GenresItem/GenresItem';

function Details(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const movie = useSelector(store => store.thisMovie)

    const backToList = () => {
        history.push("/")
    }

    return (
        <div>
            <h2>{JSON.stringify(movie[0])}</h2>
            <h2>{JSON.stringify(movie[0].title)}</h2>
            <h2>{JSON.stringify(movie[0].poster)}</h2>
        </div>
    )

}

export default Details;
