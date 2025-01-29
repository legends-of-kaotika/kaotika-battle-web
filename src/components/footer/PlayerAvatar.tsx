import React from 'react';

interface Player {
  name: string;
  image: string;
  health: number;
  isBetrayer: boolean;
}

interface PlayerProps {
  player: Player;
}

const PlayerAvatar: React.FC<PlayerProps> = ({ player }) => {

  const getBorderStyle = (health: number, isBetrayer: boolean) => {
    const fixedDegreesStart = 0;
    const fixedDegreesEnd = 180;
    const totalDegrees = 360;

    const healthTotalDegrees = totalDegrees - (fixedDegreesEnd - fixedDegreesStart);

    const normalizedHealth = Math.min(Math.max(health, 0), 100);

    const healthDegrees = (normalizedHealth / 100) * healthTotalDegrees;

    const bottomColor = isBetrayer ? 'black' : 'orange';
    return {
        
      background: `conic-gradient(
            from 90deg, /* Inicia el gradiente en 90 grados */
             ${bottomColor} ${fixedDegreesStart}deg,
             ${bottomColor}  ${fixedDegreesEnd}deg,
            red ${fixedDegreesEnd}deg ${fixedDegreesEnd + healthDegrees}deg,
            gray ${fixedDegreesEnd + healthDegrees}deg ${totalDegrees}deg
          )`,
    };
  };

  return (
    <div
      className="relative w-18 h-18 rounded-full flex items-center justify-center"
      style={{
        background: getBorderStyle(player.health,player.isBetrayer).background,
        padding: '6px',
        borderRadius: '50%',
        transition: 'background 0.5s ease',
      }}
    >
      <img
        src={player.image}
        alt={player.name}
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  );
};

export default PlayerAvatar;
