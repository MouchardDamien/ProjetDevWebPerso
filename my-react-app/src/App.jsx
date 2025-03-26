import { useState, useRef, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/singin" element={<SingIn />} />
          <Route path="/home/singup" element={<SingUp />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>

      
    </>
  )
}

function Logo({name}) {
  return (
    <img className={name} src="/src/assets/logoCYhouse.png" alt="Logo de CY-House."/>
  )
}

function Start() {
  const [animating, setAnimating] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);

  const handleClick = (e) => {
    if (!animating) {
      const rect = menuRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setClickPosition({ x, y });
      setAnimating(true);
      
      setTimeout(() => {
        window.location.href = "/home"
      }, 1000);
    }
    
  };

  return (
    <>
      <div 
        ref={menuRef}
        className={`start_menu ${animating ? 'fading' : ''}`} 
        onClick={handleClick} >
        
        <Logo name="logo_start"/>

        <div className="content">
          <h1 className="start_title">WELCOME ON CY-HOUSE !</h1>
          <h3 className="sub_start">Click to continue.</h3>
        </div>
        
        {animating && (
          <div 
            className="shockwave" 
            style={{
              left: clickPosition.x,
              top: clickPosition.y
            }}
          ></div>
        )}
      </div>
    </>
  )
}


function Home() {
  return (
    <div className = "home">
        <h1 className="home_title">HOME PAGE</h1>
        <Logo name="logo_home"/>
        <NavBar1/>
    </div>
  )
}

function SingIn() {
  return (
    <div className="singIn">

    </div>
  )
}

function SingUp() {
  return (
    <div className="singUp">

    </div>
  )
}

function NavBar1() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home/singin">Sing in</Link>
        </li>
        <li>
          <Link to="/home/singup">Sing up</Link>
        </li>
      </ul>
    </nav>
  )
}

export default App
