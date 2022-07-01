import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AddMovie from '../AddMovie/AddMovie';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import { Typography } from '@material-ui/core';

function App() {
    return (
        <div className="App">
        <Typography color="primary">
            <h1>The Movies Saga!</h1>
        </Typography>
        <Router>
            <Route path="/addMovie">
                <AddMovie/>
            </Route>
            <Route path="/" exact>
                <MovieList />
            </Route>
            <Route path="/details/:id">
                <Details />
            </Route>
        </Router>
        </div>
    );
}

export default App;
