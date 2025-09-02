import React, { useEffect, useState } from 'react';
import { getCodeFromRedirectUri, getToken } from '../util/Spotify';

const SpotifyCallback = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const code = getCodeFromRedirectUri();
    if (code) {
      getToken(code)
        .then(() => {
          window.location.replace('/');
        })
        .catch(() => {
          setError('Failed to get access token');
        });
    } else {
      setError('No code found in URL');
    }
  }, []);

  if (error) return <div>{error}</div>;
  return <div>Authorizing with Spotify...</div>;
};

export default SpotifyCallback;