import './App.css'
import HeaderContainer from './components/header/HeaderContainer'
import Hud from './components/footer/Hud';

function App() {

  return (
    <div className='w-screen h-screen'>
      {/* Header Container */}
      <HeaderContainer />
      <Hud/>
    </div>
  )
}

export default App
