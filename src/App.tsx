import './App.css'
import HeaderContainer from './components/header/HeaderContainer'
import PotionContainer from './components/Potions/PotionContainer'
import borderImage from '../public/images/header_border.png'

function App() {

  return (
    <div className='w-screen h-screen bg-center bg-cover' style={{ backgroundImage: `url(${borderImage})` }}>

      {/* Header Container */}
      <HeaderContainer />
      <PotionContainer potion1={true} potion2={true} potion3={true} />
    </div>
  )
}

export default App
