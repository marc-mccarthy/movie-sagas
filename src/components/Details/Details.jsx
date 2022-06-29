import React from 'react';
import './Details.css'
import {useSelector} from 'react-redux';

function Details(props) {

    const movie = useSelector(store => store.thisMovie)

    return (
        <div>
            <div>
                <h2>{movie.title}</h2>
            </div>
            <div className="movieItemContainer">
                <img id="movieItemImage" src={movie.poster} alt={movie.title}/>
                <p id="movieItemDescription">{movie.description}</p>
            </div>
        </div>
        
    )
}

export default Details;