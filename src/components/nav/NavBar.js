import React, { Component } from 'react';

import SearchBar from './SearchBar';

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light'>
        <a className='navbar-brand' href='#'>
          <i className='fas fa-film' style={{ fontSize: '2.25rem' }}></i>
        </a>

        <SearchBar />
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#' tabIndex='-1' aria-disabled='true'>
              Signup
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Login
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;

{
  /* <nav class="user-nav">
<img src="img/logo.png" alt="trillo logo" class="logo">
<a className='navbar-brand' href='#'>
          <i className='fas fa-film' style={{ fontSize: '2.25rem' }}></i>
        </a>
<div class="user-nav__icon-box">
    <svg class="user-nav__icon">
        <use xlink:href="img/sprite.svg#icon-chat"></use>
    </svg>
    <span class="user-nav__notification">13</span>
</div>
<div class="user-nav__user">
    <img src="img/user.jpg" alt="User photo" class="user-nav__user-photo">
    <span class="user-nav__user-name">Jonas</span>
</div>
</nav> */
}
