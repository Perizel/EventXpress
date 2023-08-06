import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setSignupError('Please fill in all fields.');
      return;
    }

    // Check if the email already exists in localStorage
    const existingUser = JSON.parse(localStorage.getItem('user'));
    if (existingUser && existingUser.email === email) {
      setSignupError('An account with this email already exists. Kindly login with your email');
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
            <h2>Welcome to EventXpress</h2>
            <p>Create an account and get started today</p>
          </div>
          <form>
            <div className="name">
              <div className="names">
                <div className="text">First Name</div>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="names"
                />
              </div>
              <div className="names">
                <div className="text">Last Name</div>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="names"
                />
              </div>
            </div>

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
              <label htmlFor="checkbox" id="checkbox">Accept terms and conditions</label>
            </div>
            <div>
              <button type="button" className="button" onClick={handleSignUp}>
                <div>Sign Up</div>
              </button>
            </div>

            <div className="buttons">
              <button className="social">
                <div>Sign Up with</div>
                <div className="IconGooglee">
                  <img src=".\Googlee.svg" alt="" />
                </div>
              </button>
              <button className="social">
                <div>Sign Up with</div>
                <div className="IconGooglee">
                  <img src="./Vector.svg" alt="" />
                </div>
              </button>
            </div>
            {signupError && <div className="ErrorMessage">{signupError}</div>}
          </form>
        </div>
      </div>
      <div className="signin">
        <p>Already a member?</p>
        <Link to="/Signin" className="yellow">
          Sign In
        </Link>
      </div>
    </div>
  );
};


export default SignUpForm;
