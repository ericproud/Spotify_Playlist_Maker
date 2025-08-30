import React from 'react';

let accessToken = '';

const TempTest = () => {
    return (
        <div>
            <button onClick={SpotifyAPI.getAccessToken}>
                Authorize Spotify
            </button>
            <button onClick={() => console.log(accessToken)}>
                Test
            </button>
        </div>
    )
}

const SpotifyAPI = {
    getAccessToken() {
        // Case 1: accessToken is already set
        if (accessToken) {
            return accessToken;
        }

        // Case 2: accessToken is in the URL
        const FoundAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const FoundexpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if (FoundAccessToken && FoundexpiresIn) {
            accessToken = FoundAccessToken[1];
            const expiresIn = Number(FoundexpiresIn[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState({token: accessToken}, null, '/'); // Clear the URL parameters
            return accessToken;
        }
        // Case 3: No accessToken, redirect to Spotify authorization
        else {
            const clientId = import.meta.env.VITE_CLIENT_ID;
            const redirectUri = import.meta.env.VITE_REDIRECT_URI;
            const scopes = ['playlist-modify-private', 'playlist-modify-public'];
            const baseUrl = 'https://accounts.spotify.com/authorize';
            const authenticationUrl = `${baseUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scopes.join(' '))}&response_type=token&show_dialog=true`;

            // Redirect to Spotify authorization URL
            window.location.href = authenticationUrl;
        }
    }
}

export default TempTest;