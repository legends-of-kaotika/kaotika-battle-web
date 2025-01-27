import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import BattleContainer from './components/battle/BattleContainer';
import { useState } from 'react';
import { attackerData, defenderData } from './constants/playersData';
import borderImage from '../public/images/header_border.png'
import Hud from './components/footer/Hud';

function App() {
  const [attacker, setAttacker] = useState(attackerData);
  const [defender, setDefender] = useState(defenderData);

  return (
    <div className='relative w-screen h-screen'>

      {/* Background Image */}
      <img src={borderImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />

      {/* Header Container */}
      <HeaderContainer />
      <BattleContainer/>

      {/* Footer Container */}
      <Hud currentPhase='attack'/>


    </div>
  )
}

export default App