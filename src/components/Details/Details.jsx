import React, {useEffect} from 'react';
import './Details.css'
import {useSelector, useDispatch} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import GenresItem from '../GenresItem/GenresItem';

function Details(props) {

    let {id} = useParams();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        console.log(id)
    }, []);

    const dispatch = useDispatch();
    const history = useHistory();

    const backToList = () => {
        history.push("/")
    }

    return (
        <div>
            <h2></h2>

        </div>
    )

}

export default Details;
