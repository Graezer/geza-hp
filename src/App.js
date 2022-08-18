import './sass/App.scss'

import { Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar.js'
import Home from './Home.js'
import Coder from './Coder.js'
import Art from './Art.js'
import Actor from './Actor'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/Coder" element={<Coder/>}/>
        <Route path="/Actor" element={<Actor/>}/>
        <Route path="/Art" element={<Art/>}/> 
      </Routes>
    </div>
  );
}

export default App;
