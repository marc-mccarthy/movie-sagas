import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import Genres from '../Genres/Genres';
import './Details.css'
import Button from '@material-ui/core/Button';

function Details(props) {

    let { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'THIS_MOVIE', payload: id });
    }, []);

    const movie = useSelector(store => store.thisMovie)

    const backToMovies = () => {
        history.push("/");
    }

    return (
        <div>
            {movie.length === 0 ? (<p>Loading...</p>) : (
                <div>
                    <h2>{movie[0].title}</h2>
                    <ul>
                        {movie.map(genre => {return (<Genres genre={genre.name} />)})}
                    </ul>
                    <Button variant="contained" color="primary" onClick={backToMovies}>Back to Movies List</Button>
                    <div className="movieItemContainer">
                        <img id="movieItemImage" src={movie[0].poster} alt={movie[0].title}/>
                        <p id="movieItemDescription">{movie[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Details;