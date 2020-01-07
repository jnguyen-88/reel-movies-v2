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
        <Router history={history}>
          <NavBar />
          <Route exact path='/' component={Landing} />
          <Route
            path='/:id'
            render={({ match }) => <MovieDetail key={match.params.id} />}
          />
        </Router>
      </div>
    );
  }
}

export default App;
