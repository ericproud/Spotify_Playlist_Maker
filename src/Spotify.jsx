import React from 'react';

let accessToken = '';

const TempTest = () => {
    return (
        <div>
            <button onClick={() => SpotifyAPI.getAccessToken()}>
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
            const scope = 'playlist-modify-private playlist-modify-public';
            const baseUrl = 'https://accounts.spotify.com/authorize';

            const url = `${baseUrl}?response_type=token&client_id=${encodeURIComponent(clientId)}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
            window.location.href = url;
            console.log('Redirecting to:', url);
        }
    }
}

export default TempTest;
export { SpotifyAPI };