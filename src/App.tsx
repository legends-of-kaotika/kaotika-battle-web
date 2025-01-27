import './App.css'
import HeaderContainer from './components/header/HeaderContainer'
import borderImage from '../public/images/header_border.png'
import BattleContainer from './components/battle/BattleContainer'
import Hud from './components/footer/Hud';

function App() {

  return (
    <div className='w-screen h-screen bg-center bg-cover' style={{ backgroundImage: `url(${borderImage})` }}>

      {/* Header Container */}
      <HeaderContainer />

      <BattleContainer/>

      {/* Footer Container */}
      <Hud currentPhase='attack'/>


    </div>
  )
}

export default App
