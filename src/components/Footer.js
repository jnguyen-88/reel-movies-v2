import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='footer-box'>
        <div className='footer-left'>
          <div className='footer-inner-left'>
            <div className='footer-contact'>
              <a>About Us</a>
              <a>Blog</a>
              <a>Contact Us</a>
              <a>Press</a>
            </div>
            <div className='moviedb-box'>
              <img
                style={{ width: '30%' }}
                src='https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png'
              />
            </div>
          </div>
        </div>
        <div className='footer-right'>
          <div className='footer-sm'>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-google-plus-g'></i>
            <i className='fab fa-instagram'></i>
          </div>
          <span style={{ fontWeight: '300' }}>
            &copy; This webpage was designed by Justin Nguyen and built with{' '}
            <i style={{ color: 'red' }} className='fas fa-heart'></i> in
            Sacramento, CA.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
