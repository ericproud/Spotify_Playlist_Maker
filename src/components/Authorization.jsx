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
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <Col className="d-flex justify-content-center">
          <Card style={{ maxWidth: '400px', textAlign: 'center' }} bg="dark" text="light">
            <Card.Body>
              <Card.Title>Welcome to Spotify Playlist Maker</Card.Title>
              <Card.Text>
                Please login with your Spotify account to continue.
              </Card.Text>
              <Button variant="success" onClick={handleLogin}>
                Login
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Authorization;