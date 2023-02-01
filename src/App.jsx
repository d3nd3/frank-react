import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar.jsx'
import MainContent from './MainContent.jsx'
import Footer from './Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar className="navbar"/>
      <MainContent className="mainContent"/>
      <Footer className="footer"/>
    </div>
  )
}

export default App
