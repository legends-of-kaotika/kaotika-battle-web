import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import BattleContainer from './components/battle/BattleContainer';
import { useState } from 'react';
import { attackerData, defenderData } from './constants/playersData';
import battleImage from '/images/battle_bg.webp';
import borderImage from '/images/header_border.png';
import Hud from './components/footer/Hud';

function App() {
  const [leftPlayer, setLeftplayer] = useState(attackerData);
  const [rightPlayer, setRightPlayer] = useState(defenderData);

  return (
    <div className='w-screen h-screen bg-center bg-cover' style={{ backgroundImage: `url(${battleImage})` }}>

      {/* Background Image */}
      <img src={borderImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />

      {/* Header Container */}
      <HeaderContainer leftPlayer={leftPlayer} rightPlayer={rightPlayer}/>
      <BattleContainer />

      {/* Footer Container */}
      <Hud currentPhase='attack' />

      {/* Footer Container */}
      <Hud currentPhase='attack' />

    </div>
  )
}

export default App