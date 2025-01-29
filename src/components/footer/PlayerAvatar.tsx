import React from 'react';
import { Player } from '../../Interfaces/Player';

interface PlayerProps {
  player: Player;
}

const PlayerAvatar: React.FC<PlayerProps> = ({ player }) => {

  console.log(player);
  
  const getBorderStyle = (isBetrayer: boolean , maxHitpoints: number, hitpoints: number) => {

    console.log("maxHitpoints: " + maxHitpoints);
    console.log("Hitpoints: " + hitpoints);

    const fixedDegreesStart = 0;
    const fixedDegreesEnd = 180;
    const totalDegrees = 360;

    const lifeTotalDegrees = totalDegrees - (fixedDegreesEnd - fixedDegreesStart);

    const life = Math.min(Math.max(hitpoints, 0), maxHitpoints);

    const lifeDegrees = (life / maxHitpoints) * lifeTotalDegrees;

    const bottomColor = isBetrayer ? 'black' : 'orange';
    return {
        
      background: `conic-gradient(
            from 90deg, /* Inicia el gradiente en 90 grados */
             ${bottomColor} ${fixedDegreesStart}deg,
             ${bottomColor}  ${fixedDegreesEnd}deg,
            red ${fixedDegreesEnd}deg ${fixedDegreesEnd + lifeDegrees}deg,
            gray ${fixedDegreesEnd + lifeDegrees}deg ${totalDegrees}deg
          )`,
    };
  };

  return (
    <div
      className="relative w-18 h-18 rounded-full flex items-center justify-center"
      style={{
        background: getBorderStyle(player.isBetrayer,player.base_attributes.hit_points,player.attributes.hit_points).background,
        padding: '6px',
        borderRadius: '50%',
        transition: 'background 0.5s ease',
      }}
    >
      <img
        src={player.avatar}
        alt={player.name}
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  );
};

export default PlayerAvatar;
