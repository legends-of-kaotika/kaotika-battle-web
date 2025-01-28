import { useEffect, useState } from 'react';
import rightLifeBar from '/images/life_bar_right.gif';
import missingRightLifeBar from '/images/missing_life_bar_right.png';

interface OpponentLifeBarInterface {
  maxHitpoints: number;
  hitpoints: number;
}

const OpponentLifeBar: React.FC<OpponentLifeBarInterface> = ({ maxHitpoints, hitpoints }) => {
  const [life, setLife] = useState(hitpoints / maxHitpoints * 100);
  const [missingLife, setMissingLife] = useState((maxHitpoints - hitpoints) / maxHitpoints * 100);

  useEffect(() => {
    setLife(hitpoints / maxHitpoints * 100);
    setMissingLife((maxHitpoints - hitpoints) / maxHitpoints * 100);
  }, [hitpoints]);

  return (
    <div className="flex inline-row h-[60%] w-full">
      <div className={`bg-left bg-cover`} style={{ backgroundImage: `url(${rightLifeBar})`, width: `${life}%` }} />
      <div className={`bg-left bg-cover`} style={{ backgroundImage: `url(${missingRightLifeBar})`, width: `${missingLife}%` }} />
    </div>
  )
}

export default OpponentLifeBar;