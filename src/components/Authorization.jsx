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
    <Container className="d-flex justify-content-center align-items-center" style={{ backgroundColor: 'dark', height: '100vh' }}>
      <Row>
        <Col className="col-12">
          <Card className="w-100 h-100" bg="success" text="white">
            <Card.Body>
              <Card.Title>Welcome to Spotify Playlist Maker</Card.Title>
              <Card.Text>Please login with your Spotify account to continue</Card.Text>
            </Card.Body>
            <Button variant="success" size="lg" onClick={handleLogin}>
              Login
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Authorization;