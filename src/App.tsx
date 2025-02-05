import { useState } from 'react';
import './App.css';
import BattleContainer from './components/battle/BattleContainer';
import FinishTurn from './components/battle/finishTurn';
import WaitingBattle from './components/battle/WaitingBattle';
import Hud from './components/footer/Hud';
import HeaderContainer from './components/header/HeaderContainer';
import InitScreen from './components/initScreen/InitScreen';
import { useSocketListeners } from './sockets/socketListeners';
import battleImage from '/images/battle_bg.webp';

function App() {
  const { startBattle, finishTurn } = useSocketListeners();
  const [initScreen] = useState(true);
  const [animationFinished, setAnimationFinished] = useState(false);

  return (
    <>
      {initScreen && !animationFinished
        ? 
        <InitScreen 
          setAnimationFinished={setAnimationFinished}
        />
        :
        <div
          className='w-screen h-screen bg-center bg-cover overflow-hidden'
          style={{ backgroundImage: `url(${battleImage})` }}>

          {/* Header Container */}
          {startBattle && <HeaderContainer />}
          
          {/* Battle Container */}
          {startBattle && <BattleContainer />}
          {!startBattle && <WaitingBattle />}

          {finishTurn && startBattle && <FinishTurn />}

          {/* Footer Container */}
          <Hud />
        </div>
      }
    </>
  );
}

export default App;