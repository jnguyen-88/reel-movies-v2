import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className='ui icon input'>
        <input type='text' placeholder='Search...' />
        <i className='search icon'></i>
      </div>
    );
  }
}

export default SearchBar;
