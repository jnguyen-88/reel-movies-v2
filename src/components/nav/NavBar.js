import React, { Component } from 'react';

import SearchBar from './SearchBar';

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light'>
        <a className='navbar-brand' href='#'>
          <i className='fas fa-film' style={{ fontSize: '2.25rem' }}></i>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <SearchBar />

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='#'
                tabIndex='-1'
                aria-disabled='true'
              >
                Signup
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
