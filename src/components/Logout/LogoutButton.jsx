import React from 'react';
import { useLogout } from 'react-admin';

const LogoutButton = () => {
  const logout = useLogout();

  const handleLogout = () => {
    logout().catch((error) => {
      console.error('Error during logout:', error);
    });
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
