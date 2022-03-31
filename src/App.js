import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Header from './components/Header'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contacts />
      
      
    </div>
  );
}

export default App;
