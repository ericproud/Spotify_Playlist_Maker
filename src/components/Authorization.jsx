import React from 'react';
import { redirectToAuth, getCodeFromRedirectUri, getToken } from '../Spotify';

function Authorization() {
  const handleLogin = () => {
    redirectToAuth();
    const code = getCodeFromRedirectUri();
    if (code) {
      getToken(code).then(token => {
        window.location.replace('/');
      })        
      .catch(err => {
          setError('Failed to get access token');
        });
    } 
    else {
      setError('No code found in URL');
    }
  };

  return (
    <div>
      <h2>Authorization</h2>
      <button onClick={handleLogin}>Log in with Spotify</button>
    </div>
  );
}