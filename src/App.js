import './App.scss'

import { Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar.js'
import Home from './Home.js'
import Coding from './Coding.js'
import Contact from './Contact.js'
import Art from './Art.js'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/Coding" element={<Coding/>}/> 
        <Route path="/Contact" element={<Contact/>}/> 
        <Route path="/Art" element={<Art/>}/> 
      </Routes>
    </div>
  );
}

export default App;
