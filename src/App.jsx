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
import PlaylistName from './components/PlaylistName.jsx'
import './App.css'
import './index.css' 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AppContent() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
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
      <Row>
        <Col md={6} className="d-flex justify-content-end">
          <div style={{width: '800px'}}>
            <div className="search-bar">
              <SearchBar onSearch={search} />
            </div>  
            <div className="search-results">
              <SearchResults searchResults={searchResults} onAdd={addTrack} />
            </div>
          </div>
        </Col>

        <Col md={6} className="d-flex justify-content-start">
          <div style={{width: '800px'}}>
            <div className="playlist">
              <PlaylistName 
                playlistName={playlistName}
                onNameChange={updatePlaylistName}
              />
              <Playlist 
                playlistTracks={playlistTracks} 
                onRemove={removeTrack} 
                onSave={savePlaylist}
              />
            </div>
          </div>
        </Col>
        <div className="playlist-link">
          <PlaylistLink link={playlistLink} />
        </div>  
      </Row>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#212529",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
          margin: 0,
        }}
      >
        <Routes>
          <Route path="/callback" element={<SpotifyCallback/>} />
          <Route path="/" element={localStorage.getItem("access_token") ? <AppContent /> : <Authorization />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
