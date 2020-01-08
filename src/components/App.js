import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import NavBar from './nav/NavBar';
import Landing from './main/Landing';
import AuthPage from './auth/AuthPage';
import MovieDetail from './details/MovieDetail';
import history from '../history';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={AuthPage} />
            <Route
              path='/:id'
              render={({ match }) => <MovieDetail key={match.params.id} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
