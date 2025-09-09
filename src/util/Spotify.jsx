import React from 'react';

const clientId = import.meta.env.VITE_CLIENT_ID;
const redirectUri = import.meta.env.VITE_REDIRECT_URI;
const baseUrl = 'https://accounts.spotify.com/authorize';
const scopes = ['playlist-modify-private', 'playlist-modify-public'];

const generateRandomString = (length) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

const sha256 = async (plain) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest('SHA-256', data);
}

const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

// Step 1: Call this when user clicks "Authorize"
const redirectToAuth = async () => {
  const codeVerifier = generateRandomString(64);
  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);

  sessionStorage.setItem('code_verifier', codeVerifier);

  const params = {
    response_type: 'code',
    client_id: clientId,
    scope: scopes.join(' '),
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri
  };
  const authUrl = new URL(baseUrl);
  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
}

// Step 2: Call this on your /callback page/component after redirect
const getCodeFromRedirectUri = () => {
  const uriParams = new URLSearchParams(window.location.search);
  return uriParams.get('code');
}

// Step 3: Call this with the code from the URL
const getToken = async (code) => {
  const codeVerifier = sessionStorage.getItem('code_verifier');
  const endpoint = 'https://accounts.spotify.com/api/token';

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
      client_id: clientId,
      code_verifier: codeVerifier
    })
  };
  const response = await fetch(endpoint, payload);

  if (!response.ok) {
    sessionStorage.setItem('access_token', null);
  }

  const data = await response.json();
  sessionStorage.setItem('access_token', data.access_token);
};

const getUserId = async () => {
  const accessToken = sessionStorage.getItem('access_token');
  if (!accessToken) throw new Error('No access token available');
  
  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  const jsonResponse = await response.json();
  return jsonResponse.id;
}

const searchSpotify = async (term) => {
  const accessToken = sessionStorage.getItem('access_token');
  if (!accessToken) throw new Error('No access token available');

  const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  const jsonResponse = await response.json();
  if (!jsonResponse.tracks) {
    return [];
  }
  return jsonResponse.tracks.items.map(track => ({
    id: track.id,
    name: track.name,
    artists: track.artists.map(artist => artist.name),
    album: track.album.name,
    uri: track.uri
  }));
};

const createPlaylist = async (name, trackUris) => {
  const accessToken = sessionStorage.getItem('access_token');
  if (!accessToken) throw new Error('No access token available');
  const userId = await getUserId();

  const createPlaylistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      public: true,
      description: 'New playlist created via spotifyplaylistmaker.vercel.app'
    })
  });

  const playlistData = await createPlaylistResponse.json();
  const playlistId = playlistData.id;
  if (!playlistId) throw new Error('Failed to create playlist');

  await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {  
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`, 
      'Content-Type': 'application/json'
    },    
    body: JSON.stringify({
      uris: trackUris
    })
  });

  return playlistId;
}

export { redirectToAuth, getCodeFromRedirectUri, getToken, searchSpotify, createPlaylist };