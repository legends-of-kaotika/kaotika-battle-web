import './App.css'
import React, { useState, useEffect } from 'react';
import HeaderContainer from './components/header/HeaderContainer'
import borderImage from '../public/images/header_border.png'
import Hud from './components/footer/Hud';
import BattleContainer from './components/battle/BattleContainer'


function App() {

  const [actions, setActions] = useState<string[]>([]);

 
  const addAction = (action: string) => {
      setActions([...actions, action]);
  };

  useEffect(() => {
    addAction('The Calborot attacks!');
  }, []);


  return (
    <div className='w-screen h-screen bg-center bg-cover' style={{ backgroundImage: `url(${borderImage})` }}>

      {/* Header Container */}
      <HeaderContainer />

      <BattleContainer/>

      {/* Footer Container */}
      <Hud/>


    </div>
  )
}

export default App
