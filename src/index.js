import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery( 'FETCH_MOVIES_SAGA', fetchAllMovies );
    yield takeEvery( 'THIS_MOVIE_SAGA', fetchThisMovie );
    yield takeEvery( 'ADD_MOVIE_SAGA', addMovie );
    yield takeEvery( 'LIKE_MOVIE_SAGA', likeMovie );
    yield takeEvery( 'DELETE_MOVIE_SAGA', deleteMovie );
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch {
        console.log('Get All Movies: Generator Error');
    }
}

function* fetchThisMovie(action) {
    // get this movie from the DB
    try {
        console.log(`Get this movie with ID #: ${action.payload}`)
        const movie = yield axios.get(`/api/movie/details?id=${action.payload}`);
        yield put({type: 'SET_MOVIE', payload: movie.data})
    } catch {
        console.log('Get This Movie: Generator Error');
    }
}

function* addMovie(action) {
    // add a movie to the DB
    try {
        console.log(`Add this movie: ${action.payload}`)
        yield axios.post('/api/movie/add', action.payload);
        yield put({type: 'FETCH_MOVIES_SAGA'});
    } catch {
        console.log('Add Movie: Generator Error');
    }
}

function* likeMovie(action) {
    // like this movie in the DB
    try {
        console.log(`Like this movie: ${action.payload}`)
        yield axios.put(`/api/movie/like?id=${action.payload}`);
        yield put({type: 'LIKE_MOVIE'});
    } catch {
        console.log('Like Movie: Generator Error');
    }
}

function* deleteMovie(action) {
    // delete this movie from the DB
    try {
        console.log(`Delete this movie: ${action.payload}`)
        yield axios.delete(`/api/movie/delete?id=${action.payload}`);
        yield put({type: 'FETCH_MOVIES_SAGA'});
    } catch {
        console.log('Delete Movie: Generator Error');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the clicked movie
const thisMovie = (state = [''], action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        thisMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
