import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header
        id='carouselExampleFade'
        className='carousel slide carousel-fade'
        data-ride='carousel'
        data-interval='6100'
        data-pause='false'
      >
        <div className='hero'>
          <h1>Reel Movies</h1>
          <p>Browse and rate the latest and greatest movies.</p>
          <Link to='/login'>
            <Button text='Login' />
          </Link>
        </div>
        <div className='carousel-inner'>
          {/* Slide 1 */}
          <div className='carousel-item active'>
            <img
              className='d-block w-100'
              src='https://image.tmdb.org/t/p/original/u3MpvNI4zWemXpLZBjhmbA2sSBC.jpg'
              alt='First slide'
            />
          </div>
          {/* Slide 2 */}
          <div className='carousel-item'>
            <img
              className='d-block w-100'
              src='https://image.tmdb.org/t/p/original/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg'
              alt='Second slide'
            />
          </div>
          {/* Slide 3 */}
          <div className='carousel-item'>
            <img
              className='d-block w-100'
              src='https://image.tmdb.org/t/p/original/hkotG0lTzS5O0wfihbukOb2e7dS.jpg'
              alt='Third slide'
            />
          </div>
          {/* Slide 4 */}
          <div className='carousel-item'>
            <img
              className='d-block w-100'
              src='https://image.tmdb.org/t/p/original/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg'
              alt='Second slide'
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
