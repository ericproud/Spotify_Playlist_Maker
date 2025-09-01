import React, { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar.jsx'
import SearchResults from './components/SearchResults.jsx'
import Playlist from './components/Playlist.jsx' 
import TempTest from './Spotify.jsx'
import { SpotifyAPI, searchSpotify } from './Spotify.jsx'
import Authorization from './components/Authorization.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpotifyCallback from './components/SpotifyCallback';


function AppContent() {
const [searchResults, setSearchResults] = useState([{name: 'name', artists: ['artist'], album: 'album', id: 1}]);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([{name: 'name', artists: ['artist'], album: 'album', id: 1}]);

  const addTrack = (track) => {
    if (playlistTracks.some((playlistTrack) => playlistTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks([track, ...playlistTracks]);
  }
  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter((playlistTrack) => playlistTrack.id !== track.id));
  }
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }
  const savePlaylist = () => {
    // API WORK TBD
  }
    
  const search = useCallback((term) => {
    searchSpotify(term).then(setSearchResults);
  }, []);

  return (

    <div className="App">
      <div className="request-auth-button">
        <Authorization />
      </div>
      <div className="search-bar">
        <SearchBar onSearch={search} />
      </div>
      <div className="search-results">
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
      </div>
      <div className="playlist">
        <Playlist 
          playlistTracks={playlistTracks} 
          onRemove={removeTrack} 
          onNameChange={updatePlaylistName} 
          onSave={savePlaylist} 
        />
      </div>
      <div className="temp-test">
        {localStorage.getItem('access_token') ? (
          <p>{localStorage.getItem('access_token')}</p>) 
          : (<p>No Access Token</p>)
        }
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/callback" element={<SpotifyCallback />} />
        <Route path="/" element={<AppContent />} />
      </Routes>
    </Router>
  )
}

export default App
