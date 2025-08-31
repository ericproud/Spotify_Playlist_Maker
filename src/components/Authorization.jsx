import React, { useState } from 'react';
import { redirectToAuth, getCodeFromRedirectUri, getToken } from '../Spotify';

function Authorization() {
  const handleLogin = () => {
    redirectToAuth();
  };

  return (
    <div>
      <h2>Authorization</h2>
      <button onClick={handleLogin}>Log in with Spotify</button>
    </div>
  );
}

export default Authorization;