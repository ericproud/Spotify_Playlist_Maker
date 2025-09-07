import React, { useState } from 'react';
import { redirectToAuth } from '../util/Spotify';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Authorization() {
  const handleLogin = () => {
    redirectToAuth();
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 vw-100 bg-dark text-white m-0 p-0 overflow-hidden">
      <h1 className="display-1 text-center mb-3">
        Welcome to Spotify Playlist Maker
      </h1>
      <p className="fs-4 text-center mb-5">
        Please login with your Spotify account to continue.
      </p>
      <Button variant="success" size="lg" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
}

export default Authorization;