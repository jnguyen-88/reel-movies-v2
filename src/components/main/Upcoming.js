import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUpcomingMovies } from '../../actions';
import Slick from './Slick';

class Upcoming extends Component {
  componentDidMount() {
    this.props.fetchUpcomingMovies();
  }

  render() {
    return <Slick sectionName='Upcoming' movies={this.props.upcomingMovies} />;
  }
}

const mapStateToProps = state => ({
  upcomingMovies: state.movies.upcomingMoviesArr
});

export default connect(mapStateToProps, { fetchUpcomingMovies })(Upcoming);
