import React, { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from './components/SearchBar.jsx'
import SearchResults from './components/SearchResults.jsx'
import Playlist from './components/Playlist.jsx' 
import { searchSpotify, createPlaylist } from './util/Spotify.jsx'
import Authorization from './components/Authorization.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SpotifyCallback from './components/SpotifyCallback'
import PlaylistLink from './components/PlaylistLink'
import './App.css'

function AppContent() {
const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistLink, setPlaylistLink] = useState('https://open.spotify.com/playlist/');

  const addTrack = (track) => {
    if (!playlistTracks.some((playlistTrack) => playlistTrack.id === track.id)) {
      setPlaylistTracks([track, ...playlistTracks]);
    }
  }
  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter((playlistTrack) => playlistTrack.id !== track.id));
  }
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }
  const savePlaylist = async () => {
    const playlistId = await createPlaylist(playlistName, playlistTracks.map(track => track.uri));
    setPlaylistLink(`https://open.spotify.com/playlist/${playlistId}`);
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
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
      <div className="playlist-link">
        <PlaylistLink link={playlistLink} />
      </div>
    </div>
  )
}
// stuff
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
