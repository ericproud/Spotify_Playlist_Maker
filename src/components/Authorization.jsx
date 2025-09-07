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
    <div style={{ 
      backgroundColor: 'dark',  // Spotify green background
      height: '100vh', 
      width: '100vw', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      flexDirection: 'column',
      color: 'success',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
        Welcome to Spotify Playlist Maker
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        Please login with your Spotify account to continue.
      </p>
      <Button 
        variant="success" 
        color = "white"
        size="lg" 
        onClick={handleLogin}
        style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}
      >
        Login
      </Button>
    </div>
 );
}

export default Authorization;