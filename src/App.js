import './App.css';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar.js'
import Home from './Home.js'
import Coding from './Coding.js'
import Contact from './Contact.js'
import Art from './Art.js'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
      {/* <Route exact path="/" component={Home}/> 
      <Route exact path="/Coding" component={Coding}/> 
      <Route exact path="/Contact" component={Contact}/> 
      <Route exact path="/Art" component={Art}/>  */}
    </div>
  );
}

export default App;
