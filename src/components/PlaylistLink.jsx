import React from 'react';

function PlaylistLink({ link }) {
  const onClick = () => {
    if(link && link !== 'https://open.spotify.com/playlist/') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  }

  const isValid = link && link !== 'https://open.spotify.com/playlist/';

  return (
    <div> 
      <button 
        onClick={onClick} 
        disabled={!isValid}
      >
        {isValid ? 'Open Your New Playlist In Spotify' : 'Playlist Not Created'}
      </button>
    </div>
  )
}

export default PlaylistLink;