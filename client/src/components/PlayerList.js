import React from 'react';
import PlayerCard from './PlayerCard';

function PlayerList({ players }) {
    return (
        
      <div className="player-list">
        {players.map( player => (
          <PlayerCard 
            key={player.id} 
            name={player.name} 
            country={player.country}
            searches={player.searches}
          />
        ))}
      </div>
    )
  }

export default PlayerList;