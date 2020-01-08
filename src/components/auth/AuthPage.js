import React, { Component } from 'react';

import './AuthPage.css';
import Footer from '../Footer';

class AuthPage extends Component {
    state = { toggleClass: '' }

    addClass = () => {
        this.setState({
            toggleClass: 'right-panel-active'
        })
    }

    removeClass = () => {
        this.setState({
            toggleClass: ''
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className='section-auth' id='section-auth'>
                    <div className={`auth-wrapper ${this.state.toggleClass}`}>
                        <div className='form-container signin-container'>
                            <form action='#'>
                                <h2>Sign in</h2>
                                <input type='email' placeholder='Email' />
                                <input type='password' placeholder='Password' />
                                <button>Sign In</button>
                            </form>
                        </div>
                        <div className='form-container signup-container'>
                            <form action='#'>
                                <h2>Create Account</h2>
                                <input type='text' placeholder='Name' />
                                <input type='email' placeholder='Email' />
                                <input type='password' placeholder='Password' />
                                <button >Sign Up</button>
                            </form>
                        </div>
                        <div className='overlay-container'>
                            <div className='overlay'>
                                <div className='overlay-panel overlay-left'>
                                    <h2>Welcome Back!</h2>
                                    <p>
                                        To keep connected with us please login with your personal info
                                    </p>
                                    <button className='ghost' id='signIn' onClick={this.removeClass}>Sign In</button>
                                </div>
                                <div className='overlay-panel overlay-right'>
                                    <h2>Hello, Moviegoer!</h2>
                                    <p>Sign up and start sharing</p>
                                    <button className='ghost' id='signUp' onClick={this.addClass}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default AuthPage;