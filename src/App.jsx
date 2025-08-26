import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

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
  const search = (searchString) => {
    // API WORK TBD
  } 

  return (

    <div className="App">
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
    </div>
  )
}

export default App
