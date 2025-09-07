import React, { useState } from 'react';
import { redirectToAuth } from '../util/Spotify';
import Button from 'react-bootstrap/Button';

function Authorization() {
  const handleLogin = () => {
    redirectToAuth();
  };

  return (
    <div>
      <Button variant="danger" onClick={handleLogin}>For Application To Function, Please Login With Spotify</Button>
    </div>
  );
}

export default Authorization;