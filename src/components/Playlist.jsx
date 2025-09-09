import React from 'react';
import TrackList from './TrackList';

function Playlist({ playlistTracks, onRemove, onSave }) {

    return (
      <div className="Playlist">
        <div className="TrackList">
          <TrackList tracks={playlistTracks} onRemove={onRemove} addMode={false}/>
        </div>
        <button onClick={onSave}>
          Save Playlist
        </button>
      </div>
    )
}

export default Playlist;