import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import BattleContainer from './components/battle/BattleContainer';
import { useState } from 'react';
import { attackerData, defenderData } from './constants/playersData';
import battleImage from '/images/battle_bg.jpg';
import borderImage from '/images/header_border.png';
import Hud from './components/footer/Hud';

function App() {
  const [attacker, setAttacker] = useState(attackerData);
  const [defender, setDefender] = useState(defenderData);

  return (
    <div className='w-screen h-screen bg-center bg-cover' style={{ backgroundImage: `url(${battleImage})` }}>
      <div className='w-screen h-screen bg-center bg-cover' style={{ backgroundImage: `url(${borderImage})` }}>

        {/* Header Container */}
        <HeaderContainer />

        <BattleContainer/>

        {/* Footer Container */}
        <Hud currentPhase='attack'/>

      </div>
    </div>
  )
}

export default App
