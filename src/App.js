import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Header from './components/Header/Header';
import { useState} from 'react';
import Menu from './components/Menu/Menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections' onClick={()=>setMenuOpen(false)}>
        <div className='section'><Header/></div>
        <div className='section'><Portfolio/></div>
        <div className='section'><About/></div>
        <div className='section'><Contact/></div>
      </div>
    </div>
  );
}

export default App;
