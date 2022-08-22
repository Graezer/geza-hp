import './sass/App.scss'
import NavBar from './components/NavBar.js'
import AnimatedRoutes from './projects/AnimatedRoutes';
// import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <NavBar />
        <AnimatedRoutes />
      {/* </Router> */}
    </div>
  );
}

export default App;
