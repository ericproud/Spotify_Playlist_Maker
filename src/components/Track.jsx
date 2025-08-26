import React from 'react'

function Track({ track, onAdd, onRemove, addMode }) {

    return (
        <div>
            <h2 className="songTitle">
                {track.name}
            </h2>
            <h3 className="songInfo">
                {track.artists} | {track.album}
            </h3>
            {
                addMode ?
                    (
                        <button onClick={onAdd} >
                            +
                        </button>
                    )
                    :
                    (
                        <button onClick={onRemove} >
                            -
                        </button>
                    )
            }
        </div>
    )
}

export default Track;