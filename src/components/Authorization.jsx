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
    <div className="d-flex justify-content-center align-items-center flex-grow-1">
      <Card className="shadow-lg rounded-4" bg="success" text="white">
        <Card.Body className="text-center">
          <Card.Title>Welcome to Spotify Playlist Maker</Card.Title>
          <Card.Text>
            Please login with your Spotify account to continue
          </Card.Text>
          <Button 
            variant="light" 
            size="lg" 
            onClick={handleLogin} 
            className="mt-3"
          >
            Login
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Authorization;