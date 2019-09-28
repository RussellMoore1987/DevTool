import React, { Component } from 'react'
import './LoginLayout.css';
import './LoginLayout.animations.css';
import CSSTransition from "react-transition-group/CSSTransition";
import loginArt from "../../../assets/images/login-art-01.png";
import formBackgroundImg from "../../../assets/images/login-form-bg.png";
import axios from 'axios';

export default class LoginLayout extends Component {

  // Goes and validates the login process
  loginCheckerHandler = () => {
    axios.get('http://localhost/open_source_project/public/api/v1/labels/dev?authToken=T3$$tK3y!2456&id=41,42,43')
      .then(response => {
        console.log(response);
      })
    const loginFormContainer = document.querySelector('.login-form-container');
    const loginForm = document.querySelector('.login-form');
    // console.dir(document.querySelector('.login-form-container'));
    loginFormContainer.classList.add('login-error');
    loginForm.classList.add('login-error');
    setTimeout(function() { 
      loginFormContainer.classList.remove('login-error'); 
      loginForm.classList.remove('login-error'); 
      document.querySelector('.form-start').focus();
  }, 1200);
  }

  render() {
    // set animation timing
    const loginFade = {
      appear: 1000,
      enter: 1000,
      exit: 1000
    }

    const loginFormContainer = {
      appear: 1700,
      enter: 1000,
      exit: 1000
    }

    const formBackground = {backgroundImage: `url(${formBackgroundImg})`}

    return (
      <CSSTransition in={true} appear={true} mountOnEnter unmountOnExit classNames="login-fade" timeout={loginFade}>
        <div className="login-container">
          <div className="login-bg flex-center">
            <img src={loginArt} alt="" />
          </div>
            <div className="login flex-center">
              <CSSTransition in={true} appear={true} mountOnEnter unmountOnExit classNames="login-form-container" timeout={loginFormContainer}>
                <div className="login-form-container flex-center">
                  <div className="login-form">
                    <div className="flex-center" style={formBackground}>
                      <div className="login-form-grid">
                        <div>
                          <i className="fas fa-user-astronaut login-form-icon"></i>
                          <input className="form-start" name="login-username" type="text" placeholder="Username" />
                        </div>
                        <div>
                          <i className="fas fa-unlock-alt login-form-icon"></i>
                          <input type="password" name="login-password" placeholder="Password" />
                          <i className="fas fa-eye login-show-password"></i>
                        </div>
                        <div>
                          <div className="btn" onClick={this.loginCheckerHandler}>Submit</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </CSSTransition>
            </div> 
        </div>
      </CSSTransition>
    )
  }
}
