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
    <Container fluid className="vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-white overflow-hidden">
      <Row className="w-100 justify-content-center">
        <Col xs={12} className="text-center">
          <h1 className="display-1 mb-3 text-truncate">
            Welcome to Spotify Playlist Maker
          </h1>
          <p className="fs-4 mb-4 text-truncate">
            Please login with your Spotify account to continue.
          </p>
          <Button variant="success" size="lg" onClick={handleLogin}>
            Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Authorization;