import React from 'react';


function TrackList({ tracks, onAdd, onRemove, addMode }) {


    return (
        <div>
            {
                tracks.map((track) => {
                    return (
                        <Track 
                            track={track} 
                            key={track.id}
                            onAdd={onAdd}
                            onRemove={onRemove}
                            addMode={addMode}
                        />
                    )}
                )
            }
        </div>
    )
}