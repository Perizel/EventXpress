import React, { useState } from 'react';

export const AuthContext = React.createContext();

const Log = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const updateAuthState = (value) => {
    setAuthenticated(value);
  };

  const handleLogout = () => {
    // Perform any necessary logout logic here
    updateAuthState(false); // Set authenticated state to false on logout
  };

  return (
    <AuthContext.Provider value={{ authenticated, updateAuthState, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Log;
