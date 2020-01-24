import React from 'react';
import Weather from "./components/Weather"
import News from './components/News';
import Navbar from './components/Navbar';
import { Route } from "react-router-dom"
import VantaaJobs from './components/vantaaJobs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/jobs" component={VantaaJobs}/>
      <Route path="/news" component={News}/>
      <Route path="/weather" component={Weather}/>
    </div>
  );
}

export default App;
