import React from 'react'

function Track({ track, onAdd, onRemove, addMode }) {

    return (
        <div>
            <h2 className="songTitle">
                {track.name}
            </h2>
            <h3 className="songInfo">
                {track.artists.join(', ')} | {track.album}
            </h3>
            {
                addMode ?
                    (
                        <button onClick={() => onAdd(track)} >
                            +
                        </button>
                    )
                    :
                    (
                        <button onClick={() => onRemove(track)} >
                            -
                        </button>
                    )
            }
        </div>
    )
}

export default Track;