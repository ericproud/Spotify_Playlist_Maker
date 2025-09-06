import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Track({ track, onAdd, onRemove, addMode }) {

    return (
      <Card bg="dark" text="light" className="px-1 py-1" >
        <Card.Body className="py-1 px-1">
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-start">
              <Card.Title>{track.name}</Card.Title>
              <Card.Text>
                {track.artists ? track.artists.join(", ") : ""} | {track.album}
              </Card.Text>
            </div>

            <Button
              variant={addMode ? "success" : "danger"}
              onClick={() => addMode ? onAdd(track) : onRemove(track)}
            >
              {addMode ? "+" : "-"}
            </Button>
          </div>
        </Card.Body>
      </Card>

      /*
        <div>
            <h2 className="songTitle">
                {track.name}
            </h2>
            <h3 className="songInfo">
                {track.artists ? track.artists.join(', ') : ''} | {track.album}
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

      */
    )
}

export default Track;