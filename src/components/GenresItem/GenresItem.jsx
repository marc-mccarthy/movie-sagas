import React from 'react';
import './GenresItem.css'

function GenresItem(props) {

    return (
        <ul>
            <li>{props.name}</li>
        </ul>
    )
}

export default GenresItem;