import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignIn.css';
import { AuthContext } from './Log';

const SignInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
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
      navigate('/EventPage');
    } else {
      setLoginError('Invalid email or password.');
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  return (
    <div className="SignIn">
      <div className="Frame1000003719">
        <div className="Title">Do you have an account?</div>
        <Link to="/" className="Title sub-title">
          Sign up
        </Link>
      </div>
      <div className="Frame167">
        <div className="Frame149">
          <div className="Title">Hello! Welcome back</div>
          <div className="Title">We are really happy to see you again!</div>
        </div>
        <div className="Frame166">
          <div className="Frame165">
            <div className="Frame163">
              <div className="Frame153">
                <div className="Title">Email</div>
                <div className="Frame150">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="InputField"
                  />
                </div>
              </div>
              <div className="Frame154">
                <div className="Title">Password</div>
                <div className="Frame150">
                  <input
                    type={isPasswordHidden ? 'password' : 'text'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="InputField"
                  />
                  <div className="IconHidePassword" onClick={togglePasswordVisibility}>
                    {isPasswordHidden ? '🙈' : '👁️'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Frame162">
            <div className="Frame169">
              <div className="Frame155">
                <div className="Container"></div>
                <div className="Title">Keep me login</div>
              </div>
              <div className="Title">Reset password</div>
            </div>
            <div className="Frame161">
              <div className="Frame2">
                <div className="ButtonPrimary" onClick={handleSignIn}>
                  <div className="DownloadNow">Sign In</div>
                </div>
              </div>
              <div className="Frame161">
                <div className="ButtonPrimary">
                  <div className="DownloadNow">Sign In with </div>
                  <div className="IconGooglee">
                    <div className="Vector"></div>
                    <div className="Vector"></div>
                    <div className="Vector"></div>
                    <div className="Vector"></div>
                  </div>
                </div>
                <div className="ButtonPrimary">
                  <div className="DownloadNow">Sign In with </div>
                  <div className="Vector"></div>
                </div>
              </div>
              {loginError && <div className="ErrorMessage">{loginError}</div>}
            </div>
          </div>
        </div>
      </div>
      <div className="Frame169">
        <div className="EventexPressLogo5">
          <img
            className="EventexPressLogo3"
            style={{ width: '100%', height: '100%' }}
            src={process.env.PUBLIC_URL + '/logo1.png'}
            alt="logo"
          />
        </div>
        <div className="Frame1000003717">
          <div className="Switch">
            <div className="Track"></div>
            <div className="HandleContainer">
              <div className="Handle"></div>
            </div>
          </div>
          <div className="Frame157">
            <div className="UserImagesUserImages"></div>
            <div className="DownloadNow">User</div>
          </div>
        </div>
      </div>
      {loginError && <div className="ErrorMessage">{loginError}</div>}
    </div>
  );
};

export default SignInForm;
