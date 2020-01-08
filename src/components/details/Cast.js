import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Cast.css';

class Cast extends Component {
  render() {
    return this.props.cast.slice(0, 5).map(cast => {
      return (
        <div key={this.props.cast.name} className='cast-box'>
          <img
            src={`https://image.tmdb.org/t/p/w154${cast.profile_path}`}
            alt={cast.name}
          />
          <p className='cast-actor'>{cast.name}</p>
          <p className='cast-character'>{cast.character}</p>
        </div>
      );
    });
  }
}

const mapStateToProps = state => ({
  cast: state.movies.cast
});

export default connect(mapStateToProps)(Cast);
