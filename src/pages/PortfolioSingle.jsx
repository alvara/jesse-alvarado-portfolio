import { useParams } from 'react-router';
import { portfolio } from '../data';
import Navbar from '../components/Navbar/Navbar';
import Menu from '../components/Menu/Menu';
import PortfolioHeader from '../components/PortfolioHeader/PortfolioHeader';
import Contact from '../components/Contact/Contact';
import { useState } from 'react';
import './PortfolioSingle.scss';
import Slide from '../components/Slide/Slide';
import PortfolioBuiltBy from '../components/PortfolioBuiltBy/PortfolioBuiltBy';
// TODO: add graphQL to manage data for posts in future

export default function PortfolioSingle() {
  const { slug } = useParams();
  const d = portfolio.filter((item) => { return item.slug === slug })[0];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='portfolio-single'>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <div className='sections' onClick={()=>setMenuOpen(false)}>
        <div className='section'><PortfolioHeader data={d}/></div>
        <div className='section'><PortfolioBuiltBy data={d}/></div>
        {d.slides.map((slide) => (
         <Slide key={slide.title} data={slide} />
        ))}
        <div className='section'><Contact/></div>
      </div>
    </div>
  )
}
