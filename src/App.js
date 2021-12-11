import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import Testimonials from './components/Testimonials/Testimonials';
import Header from './components/Header/Header';
import { useState} from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <Header/>
        <Portfolio/>
        <Blog/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
