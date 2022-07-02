import { HashRouter as Router, Route } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import './App.css';
import AddMovie from '../AddMovie/AddMovie';
import EditMovie from '../EditMovie/EditMovie';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import Top10Movies from '../Top10Movies/Top10Movies';

function App(props) {
    return (
        <div className="App">
        <Typography color="primary">
            <h1>The Movies Saga!</h1>
        </Typography>
        <Router>
            <Route path="/addMovie">
                <AddMovie/>
            </Route>
            <Route path="/editMovie/:id">
                <EditMovie />
            </Route>
            <Route path="/" exact>
                <MovieList />
            </Route>
            <Route path="/details/:id">
                <Details />
            </Route>
                <Route path="/top10Movies">
                    <Top10Movies />
                </Route>
        </Router>
        </div>
    );
}

export default App;
