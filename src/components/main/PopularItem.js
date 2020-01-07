import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMovie } from '../../actions';

class PopularItem extends Component {
  handleId = e => {
    let movieId = this.props.movieId;
    this.props.fetchMovie(movieId);
  };

  render() {
    return (
      <div className='popMovies' onClick={this.handleId} key={this.props.id}>
        <div className='popMovies-text'>
          <h3>{this.props.title}</h3>
          <p>{this.props.overview.substring(0, 125) + '...'}</p>
        </div>
        <img
          className='movie-img'
          src={`http://image.tmdb.org/t/p/w780${this.props.image}`}
          alt={this.props.title}
        />
      </div>
    );
  }
}

export default connect(null, { fetchMovie })(PopularItem);
