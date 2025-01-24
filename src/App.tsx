import './App.css'
import HeaderContainer from './components/header/HeaderContainer'
import borderImage from '../public/images/header_border.png'

function App() {

  return (
    <div className='w-screen h-screen bg-center bg-cover border-1' style={{ backgroundImage: `url(${borderImage})` }}>

      {/* Header Container */}
      <HeaderContainer />
    </div>
  )
}

export default App
