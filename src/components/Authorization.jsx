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
    <Container fluid className="vh-100 bg-dark d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <Col className="d-flex justify-content-center">
          <Card bg="dark" text="white" className="text-center border-0 p-5" style={{ maxWidth: '600px' }}>
            <Card.Body>
              <Card.Title className="display-1 mb-4">
                Welcome to Spotify Playlist Maker
              </Card.Title>
              <Card.Text className="fs-4 mb-5">
                Please login with your Spotify account to continue.
              </Card.Text>
              <Button variant="success" size="lg" onClick={handleLogin}>
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