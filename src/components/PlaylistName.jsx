import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



function PlaylistName({ onNameChange }) {
  const [term, setTerm] = useState(playlistName || "New Playlist");

  return (
    <Form>
      <Form.Control
        type="text" 
        placeholder="Enter Your Playlist's Name"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value)
          onNameChange(e.target.value)
        }}
        className="me-2"
        aria-label="text"
      />
    </Form>
  )
}

export default PlaylistName;