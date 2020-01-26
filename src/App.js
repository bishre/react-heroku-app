import React, { useState, useEffect } from 'react';
import Weather from "./components/Weather"
import News from './components/News';
import Navbar from './components/Navbar';
import { Route } from "react-router-dom"
import VantaaJobs from './components/vantaaJobs';
import UIContextProvider from './context/uiContext';

function App() {
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const checkIfMobile = () => {
    const isMobile = window.innerWidth <= 425
    setIsMobile(isMobile)
  }
  return (
    <div className="App">
      <UIContextProvider>
        <Navbar isMobile={isMobile}/>
        <Route path="/jobs" component={VantaaJobs}/>
        <Route path="/news" component={News}/>
        <Route path="/weather" component={Weather}/>
      </UIContextProvider>
    </div>
  );
}

export default App;
