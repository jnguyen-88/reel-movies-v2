import React, { Component } from 'react';

class UserReviewBox extends Component {
  render() {
    return (
      <div className='popMovies'>
        <img
          src='https://image.tmdb.org/t/p/original/cCVsewbQIdR8LsY3EGZNlpbiqK9.jpg'
          className='movie-img img-img'
        />
        <div className='popMovies-text'>
          <h4>The Mandalorian (2019)</h4>
          <p>This will be a User comment once backend is implemented</p>
        </div>
      </div>
    );
  }
}

export default UserReviewBox;
