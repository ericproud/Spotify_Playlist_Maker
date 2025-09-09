import React from 'react';
import TrackList from './TrackList';

function Playlist({ playlistTracks, onRemove, onSave }) {

    return (
      <div className="Playlist">
        <TrackList className="TrackList" tracks={playlistTracks} onRemove={onRemove} addMode={false}/>
        <button onClick={onSave}>
          Save Playlist
        </button>
      </div>
    )
}

export default Playlist;