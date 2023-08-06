import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignIn.css';
import { AuthContext } from './Log';

const SignInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const { updateAuthState } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setLoginError('Please fill in both email and password.');
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setLoginError('');
      updateAuthState(true);
      navigate('/');
    } else {
      setLoginError('Invalid email or password.');
    }
  };


  return (
    <div className="background-img">
      <div className="nav">
        <img className="logo-img" src="/logo1.png" alt="" />
        <div className="logo-side">
          <img className="handle" src="./Handle container.png" alt="" />
          <div className="user">
            <img src="./User Images.svg" alt="" />
            <p>User</p>
          </div>
        </div>
      </div>
      <div className="box-container">
        <div className="box">
          <div className="box-heading">
            <h2>Hello! Welcome back</h2>
            <p>We are really happy to see you again!</p>
          </div>
          <form>
            <div className="emails">
              <div className="email">Email</div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="email"
              />
            </div>
            <div className="center">
              <div className="pass">
                <div className="passs">Password</div>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="password"
                />
              </div>
            </div>
            <div className="check">
              <input type="checkbox" name="checkbox" />
              <label htmlFor="checkbox" id="checkbox">Keep me login</label>
              <div className="reset" onClick={() => console.log('Reset password clicked')}>
                <p>Reset password</p>
              </div>
            </div>

            <div>
              <button type="button" className="button" onClick={handleSignIn}>
                <div>Sign In</div>
              </button>
            </div>

            <div className="buttons">
              <button className="social">
                <div>Sign In with</div>
                <div className="IconGooglee">
                  <img src=".\Googlee.svg" alt="" />
                </div>
              </button>
              <button className="social">
                <div>Sign In with</div>
                <div className="IconGooglee">
                  <img src="./Vector.svg" alt="" />
                </div>
              </button>
            </div>
            {loginError && <div className="ErrorMessage">{loginError}</div>}
          </form>
        </div>
      </div>
      <div className="signin">
        <p>Do you have an account?</p>
        <Link to="/Signup" className="yellow">
          Sign Up
        </Link>
      </div>
    </div>
  );
};
export default SignInForm;
