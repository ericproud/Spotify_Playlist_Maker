import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Track({ track, onAdd, onRemove, addMode }) {

  return (
    <Card bg="dark" text="light" className="px-1 py-1" >
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column flex-grow-1 me-2 text-start">
            <Card.Title>{track.name}</Card.Title>
            <Card.Text className="text-white-50">
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
  )
}

export default Track;