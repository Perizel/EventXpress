import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './Signup';
import SignInForm from './Signin';
import EventPage from './EventPage';

export const AuthContext = React.createContext();

function Log() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateAuthState = (value) => {
    setIsLoggedIn(value);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, updateAuthState }}>
      <Router>
        <Routes>
          {!isLoggedIn && <Route path="/" element={<SignUpForm />} />}
          {!isLoggedIn && <Route path="/Signin" element={<SignInForm />} />}
          {isLoggedIn && <Route path="/EventPage" element={<EventPage />} />}
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default Log;
