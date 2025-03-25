import { useState, useRef, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Start_Home />
    </>
  )
}

function Start_Home() {
  const [visibleHome, setVisibleHome] = useState(false);
  const [visibleStart, setVisibleStart] = useState(true);

  const toHome = () => {
    setVisibleHome(true);
  };

  return (
    <>
      <Start visible={visibleStart} setVisible={setVisibleStart} switchPage={toHome}/>
      <Home visible={visibleHome} setVisible={setVisibleHome}/>
    </>
  )
}

function Logo({name}) {
  return (
    <img className={name} src="/src/assets/logoCYhouse.png" alt="Logo de CY-House."/>
  )
}

function Start({visible, setVisible, switchPage}) {
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
        setVisible(false);
        switchPage();
      }, 1000);
    }
    
  };

  return (
    visible && (
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
  )
}


function Home({visible, setVisible}) {
  
  return (
    visible && (
      <div className = "home">
          <h1 className="home_title">HOME PAGE</h1>
            <Logo name="logo_home"/>
          <nav>
            
          aaaaa
          </nav>
      </div>
    )
  )
}

export default App