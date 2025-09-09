import React from 'react';
import TrackList from './TrackList';

function SearchResults({ searchResults, onAdd }) {
    return (
        <div className="SearchResults">
            <div className="TrackList">
                <TrackList tracks={searchResults} onAdd={onAdd} addMode={true} />
            </div>
        </div>
    )
}

export default SearchResults;