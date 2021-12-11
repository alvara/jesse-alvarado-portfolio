import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import Testimonials from './components/Testimonials/Testimonials';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Navbar/>
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
