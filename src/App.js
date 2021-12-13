import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import Testimonials from './components/Testimonials/Testimonials';
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
        <div className='section'><Blog/></div>
        <div className='section'><Testimonials/></div>
        <div className='section'><Contact/></div>
      </div>
    </div>
  );
}

export default App;
