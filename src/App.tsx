import './App.css'
import HeaderContainer from './components/header/HeaderContainer'
import borderImage from '../public/images/header_border.png'
import Hud from './components/footer/Hud';

function App() {

  return (
    <div className='w-screen h-screen bg-center bg-cover' style={{ backgroundImage: `url(${borderImage})` }}>

      {/* Header Container */}
      <HeaderContainer />
      <Hud/>
    </div>
  )
}

export default App
