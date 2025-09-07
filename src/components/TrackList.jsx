import React from 'react';
import Track from './Track';
import ListGroup from 'react-bootstrap/ListGroup';

function TrackList({ tracks, onAdd, onRemove, addMode }) {

	return (
    <ListGroup className="overflow-auto" style={{ maxHeight: '500px' }}>
      {tracks.map((track) => (
        <ListGroup.Item className="p-0 border-0">
          	<Track 
							track={track} 
							key={track.id}
							onAdd={onAdd}
							onRemove={onRemove}
							addMode={addMode}
						/>
        </ListGroup.Item>
      ))}
    </ListGroup>
	)
}

export default TrackList;