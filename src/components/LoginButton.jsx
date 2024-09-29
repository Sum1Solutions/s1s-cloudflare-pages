import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        <span>Welcome, {user.name}! </span>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
      </div>
    );
  }

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
}

export default LoginButton;
