import './App.css'
import HeaderContainer from './components/header/HeaderContainer'
import PotionContainer from './components/Potions/PotionContainer'
import borderImage from '../public/images/header_border.png'
//import Hud from './components/footer/Hud';

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

      {/* Potion Container */}
      <PotionContainer antidote={true} enhancer={true} healing={true} />

      {/* <Hud/> */}

    </div>
  )
}

export default App