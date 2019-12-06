import React, { Component } from 'react';

import SearchBar from './SearchBar';

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light'>
        <a className='navbar-brand' href='/reel-movies-v2'>
          <i className='fas fa-film' style={{ fontSize: '2.25rem' }}></i>
        </a>

        <SearchBar />
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' href='/reel-movies-v2'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link'
              href='/reel-movies-v2'
              tabIndex='-1'
              aria-disabled='true'
            >
              Signup
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/reel-movies-v2'>
              Login
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
