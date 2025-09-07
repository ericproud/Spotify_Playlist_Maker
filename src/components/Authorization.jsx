import React, { useState } from 'react';
import { redirectToAuth } from '../util/Spotify';
import Button from 'react-bootstrap/Button';


function Authorization() {
  const handleLogin = () => {
    redirectToAuth();
  };

  return (
    <div className="bg-dark text-white d-flex flex-column justify-content-center align-items-center vh-100 text-center p-3">
      <h1 className="display-1 mb-3">
        Welcome to Spotify Playlist Maker
      </h1>
      <p className="fs-4 mb-4">
        Please login with your Spotify account to continue.
      </p>
      <Button 
        variant="success"   // Bootstrap green button
        size="lg"
        onClick={handleLogin}
      >
        Login
      </Button>
    </div>
  );
}

export default Authorization;