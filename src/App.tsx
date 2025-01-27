import './App.css'
import HeaderContainer from './components/header/HeaderContainer'
import PotionContainer from './components/Potions/PotionContainer'

function App() {

  return (
    <div className='w-screen h-screen'>
      {/* Header Container */}
      <HeaderContainer />
      <PotionContainer potion1={true} potion2={true} potion3={true} />
    </div>
  )
}

export default App
