import React from 'react';

function RequestAuthorizationButton() {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_REDIRECT_URI;
    const baseUrl = 'https://accounts.spotify.com/authorize';
    const scopes = ['playlist-modify-private', 'playlist-modify-public'];
    const authenticationUrl = `${baseUrl}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(' '))}&response_type=code&show_dialog=true`;

    return (
        <a className="btn btn-primary" href={authenticationUrl}>
            Authorize Spotify
        </a>
    );
}

export default RequestAuthorizationButton;