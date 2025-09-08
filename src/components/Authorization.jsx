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
    <Card className="w-100 h-100">
      <Card.Body>
        <Card.Title>Welcome to Spotify Playlist Maker</Card.Title>
        <Card.Text>Please login with your Spotify account to continue</Card.Text>
      </Card.Body>
      <Button variant="success" size="lg" onClick={handleLogin}>
        Login
      </Button>
    </Card>
  );
}

export default Authorization;