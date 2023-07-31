import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignUpForm from './components/Signup';
import SignInForm from './components/Signin';
import Log from './components/Log';
import './App.css'

const App = () => {
  return (
    <Router>
      <Log>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<SignUpForm />} />
          <Route path="/Signin" element={<SignInForm />} />
        </Routes>
      </Log>
    </Router>
  );
};

export default App;
