import './sass/App.scss'
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import AnimatedRoutes from './projects/AnimatedRoutes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}

export default App;
