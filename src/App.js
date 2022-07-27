import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Floating Head of Geza welcomes you to his Homepage!
        </p>
        <a
          className="App-link"
          href="https://www.schauspielervideos.de/fullprofile/schauspieler-geza-willem-artus-steinert.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          I am an Actor!
        </a>
      </header>
    </div>
  );
}

export default App;
