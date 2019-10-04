import React from 'react';

function PlayerCard({key, name, country, searches}) {
    return (
        <div className="card" data={key}>
            <h1>Name: {name}</h1>
            <h3>Country: {country}</h3>
            <h3>Searches: {searches}</h3>
        </div>
    )
}

export default PlayerCard;