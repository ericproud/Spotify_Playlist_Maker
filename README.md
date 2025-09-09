# [About Spotify Playlist Maker](https://spotifyplaylistmaker.vercel.app/)


## Overview
This is a web application that allows you to create, and save a playlist to your spotify account without ever using spotify's proprietary software.

NOTE: USE THIS APP ON YOUR COMPUTER, the app's UI is currently not suitable for use on your phone.

## Features 
- User authentication
- Creating, naming, and saving a playlist to spotify, including the ability to search for and add songs from spotify
- Redirecting users to newly created playlists
- Stylized UI

## Tech Stack
- Frontend: Javascript, ReactJS, HTML/JSX
- API: [Spotify Web API](https://developer.spotify.com/documentation/web-api)
- Styling: React-Bootstrap, CSS

# Technical Details
- User authentication is done using [Spotify's PCKE Authorization flow](https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow)
- The spotify API is used for user authentication, fetching songs based on search parameters, saving playlists to users accounts, and getting the link to created playlist
- The project was deployed using Vercel

### A Note on the Messy Commit History

[Spotify does not allow you to develop in a localhost environment](https://developer.spotify.com/documentation/web-api/concepts/redirect_uri) and thus, in the interest of quick development rather than a clean commit history, I opted to not create a mock environment where I could test changes to features, and the UI without having to redeploy the site. This is a mistake I won't make again as the time it has taken to redeploy the project so many times on it's own has likely taken back all of the up front time saved and more. Lesson learned. 
