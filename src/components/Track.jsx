import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Track({ track, onAdd, onRemove, addMode }) {

    return (
      <Card>
          <Card.Body>
              <Card.Title>{track.name}</Card.Title>
              <Card.Text>
                  {track.artists ? track.artists.join(', ') : ''} | {track.album}
              </Card.Text>
              <Button variant={addMode ? "success" : "danger"} onClick={() => onAdd(track)} >
                {addMode ? "+" : "-"}
              </Button>
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