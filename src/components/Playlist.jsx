import React from 'react';
import TrackList from './TrackList';

function Playlist({ playlistTracks, onRemove, onNameChange, onSave }) {

    const handleChange = (e) => {
        onNameChange(e.target.value);
    }

    return (
        <div className="Playlist">
            <input className="PlaylistName" onChange={handleChange} defaultValue={"New Playlist"} />
            <TrackList tracks={playlistTracks} onRemove={onRemove} addMode={false}/>
            <button onClick={onSave}>
                Save Playlist
            </button>
        </div>
    )
}

export default Playlist;