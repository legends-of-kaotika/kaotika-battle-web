import borderImage from '../public/images/header_border.png'
import './App.css'
import HeaderContainer from './components/header/HeaderContainer'
import PotionContainer from './components/Potions/PotionContainer'
//import Hud from './components/footer/Hud';

function App() {

  return (
    <div className='relative w-screen h-screen bg-center bg-cover z-20'
      style={{ backgroundImage: `url(${borderImage})` }}>

      {/* Header Container */}
      <HeaderContainer />

      {/* Potion Container */}
      <PotionContainer antidote={true} enhancer={true} healing={true} />

      {/* <Hud/> */}

    </div>
  )
}

export default App
