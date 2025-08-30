import React from 'react';

let accessToken = '';

const SpotifyAPI = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const FoundAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const FoundexpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if (FoundAccessToken && FoundexpiresIn) {
            accessToken = FoundAccessToken[1];
            const expiresIn = Number(FoundexpiresIn[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState({token: accessToken}, null, '/');
            return accessToken;
        } else {
            const clientId = import.meta.env.VITE_CLIENT_ID;
            const redirectUri = import.meta.env.VITE_REDIRECT_URI;
            const scope = 'playlist-modify-private playlist-modify-public';
            const baseUrl = 'https://accounts.spotify.com/authorize';

            const url = `${baseUrl}?response_type=token&client_id=${encodeURIComponent(clientId)}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
            console.log('Redirecting to:', url);
            window.location.href = url;
        }
    }
};

const TempTest = () => (
    <div>
        <button onClick={() => SpotifyAPI.getAccessToken()}>
            Authorize Spotify
        </button>
    </div>
);

export default TempTest;
export { SpotifyAPI };