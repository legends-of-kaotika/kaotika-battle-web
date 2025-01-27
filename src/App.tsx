import './App.css'
import HeaderContainer from './components/header/HeaderContainer'
import borderImage from '../public/images/header_border.png'
//import Hud from './components/footer/Hud';
import BattleContainer from './components/battle/BattleContainer'

function App() {

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
      {/* Potion Container */}
      {/* <Hud/> */}

    </div>
  )
}

export default App