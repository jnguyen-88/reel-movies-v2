import React from 'react';
import { Router, Route } from 'react-router-dom';

import NavBar from './nav/NavBar';
import Landing from './main/Landing';
import MovieDetail from './details/MovieDetail';

import history from '../history';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router history={history}>
          <Route exact path='/' component={Landing} />
          <Route
            exact
            path='/movies/:id'
            render={({ match }) => <MovieDetail key={match.params.id} />}
          />
        </Router>
      </div>
    );
  }
}

export default App;
