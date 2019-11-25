import React, { Component } from 'react';
import { connect } from 'react-redux';

class SlickItem extends Component {
  // Function to find Genre name
  genre = id => {
    // Filter item by id by matching it to the item'sID and return the 'name'
    // genres = [{id, name}, {id, name}]
    return this.props.genres.filter(item => {
      return item.id === id;
    })[0].name;
  };

  render() {
    return (
      <div className='slick-item-box'>
        <img src={`https://image.tmdb.org/t/p/w154${this.props.image}`} />
        <h5>{this.props.title}</h5>
        <p className='genre-text'>{this.genre(this.props.genreId)}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  genres: state.movies.listOfGenres
});

export default connect(mapStateToProps)(SlickItem);
