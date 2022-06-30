import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    return (
        <main>
            <h1><u>Movie List</u></h1>
            <section className="movies">
                {movies.map((movie, index) => (<MovieItem key={movie.id} index={index} movie={movie}/>))}
            </section>
        </main>
    );
}

export default MovieList;
