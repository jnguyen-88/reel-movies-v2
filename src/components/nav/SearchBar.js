import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form action='#' class='search'>
        <input
          type='text'
          className='search-input'
          placeholder='Search movie title'
        />
        <input type='submit' className='search-submit' value='Search' />
      </form>
    );
  }
}

export default SearchBar;
