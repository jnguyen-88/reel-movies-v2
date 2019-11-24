import React, { Component } from 'react';
import { connect } from 'react-redux';

class SlickItem extends Component {
  // TODO: get array of Genres from movieDB, match genreId to get value from array

  genre = id => {
    return this.props.genres.filter(item => {
      return item.id === id;
    })[0].name;
  };

  render() {
    return (
      <div className='slick-item-box'>
        <img src={`https://image.tmdb.org/t/p/w154${this.props.image}`} />
        <h5 style={{ fontSize: '1rem' }}>{this.props.title}</h5>
        <p>{this.genre(this.props.genreId)}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  genres: state.movies.listOfGenres
});

export default connect(mapStateToProps)(SlickItem);
