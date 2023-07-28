import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [signupError, setSignupError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setSignupError('Please fill in all fields.');
      return;
    }

    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };
    localStorage.setItem('user', JSON.stringify(newUser));

    navigate('/Signin');
  };

  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };


  return (
    <div className="SignUp">
      <div className="Frame1000003718">
        <div className="Title main-title">Already a member?</div>
        <Link to="/Signin" className="Title sub-title">
          Sign In
        </Link>
      </div>
      <div className="Frame167">
        <div className="Frame149">
          <div className="Title main-title">Welcome to EventXpress</div>
          <div className="Title sub-title">Create an account and get started today</div>
        </div>
        <div className="Frame166">
          <div className="Frame165">
            <div className="Frame164">
              <div className="Frame151">
                <div className="Title main-title">First Name</div>
                <div className="Frame150">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="InputField"
                  />
                </div>
              </div>
              <div className="Frame152">
                <div className="Title main-title">Last Name</div>
                <div className="Frame150">
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="InputField"
                  />
                </div>
              </div>
            </div>
            <div className="Frame163">
              <div className="Frame153">
                <div className="Title main-title">Email</div>
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
              <div className="Frame155">
                <div className="Title main-title">Password</div>
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
            <div className="Frame155">
              <div className="Container" />
              <div className="Title main-title">Accept terms and conditions</div>
            </div>
            <div className="Frame161">
              <div className="Frame2">
                <button type="button" className="ButtonPrimary" onClick={handleSignUp}>
                  <div className="DownloadNow">Sign Up</div>
                </button>
              </div>
              <div className="Frame160">
                <button type="button" className="ButtonPrimary">
                  <div className="DownloadNow">Sign Up with</div>
                  <div className="IconGooglee">
                    {/* Google icon SVG or image can be added here */}
                  </div>
                </button>
                <button type="button" className="ButtonPrimary">
                  <div className="DownloadNow">Sign Up with</div>
                  <div className="Vector" />
                </button>
              </div>
              {signupError && <div className="ErrorMessage">{signupError}</div>}
            </div>
          </div>
        </div>
      </div>
      <div className="Frame168">
        <div className="EventexPressLogo7">
          <img
            className="EventexPressLogo3"
            style={{ width: '100%', height: '100%' }}
            src={process.env.PUBLIC_URL + '/logo1.png'}
            alt="logo"
          />
        </div>

        <div className="Frame1000003717">
          <div className="Switch">
            <div className="Track" />
            <div className="HandleContainer">
              <div className="Handle" />
            </div>
          </div>
          <div className="Frame157">
            <div className="UserImagesUserImages" />
            <div className="Title main-title">User</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
