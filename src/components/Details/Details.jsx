import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import Genres from '../Genres/Genres';
import './Details.css'
import EditMovie from '../EditMovie/EditMovie'
import { Button } from '@material-ui/core';
import { Stack } from '@mui/material';
import loadingGif from '../../images/loading.gif';

function Details(props) {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'THIS_MOVIE_SAGA', payload: id });
    }, []);

    const { id } = useParams();

    const movie = useSelector(store => store.thisMovie)

    const editMovie = () => {
        history.push(`/editMovie/${id}`)
    }

    const backToMovies = () => {
        history.push("/");
    }

    return (
        <div>
            {movie.length === 0 ? (<img src={loadingGif}/>) : (
                <div>
                    <Stack
                        direction="row"
                        spacing={ 3 }
                        justifyContent="center"
                    >
                        <Button
                            onClick={ editMovie }
                            variant="outlined"
                            color="primary">
                            Edit Movie
                        </Button>
                        <Button
                            onClick={ backToMovies }
                            variant="outlined"
                            color="secondary">
                            Back to Movies List
                        </Button>
                    </Stack>
                    <h2>{movie[0].title}</h2>
                    <ul>
                        {movie.map(genre => {return (<Genres genre={genre.name} />)})}
                    </ul>
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