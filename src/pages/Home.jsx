import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import Portfolio from '../components/Portfolio/Portfolio';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import { useState}  from 'react';
import './Home.scss';

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home">
      <a id='navbar-top'></a>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections' onClick={()=>setMenuOpen(false)}>
        <div className='section'><Header/></div>
        <div className='section'><Portfolio/></div>
        <div className='section'><About/></div>
        <div className='section'><Contact/></div>
      </div>
    </div>
  )
}
