import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchNowPlayingMovies } from '../../actions';
import Slick from './Slick';

class NowPlaying extends Component {
  componentDidMount() {
    this.props.fetchNowPlayingMovies();
  }

  render() {
    return (
      <Slick sectionName='Now Playing' movies={this.props.moviesPlaying} />
    );
  }
}

const mapStateToProps = state => ({
  moviesPlaying: state.movies.nowPlayingMoviesArr
});

export default connect(mapStateToProps, { fetchNowPlayingMovies })(NowPlaying);
