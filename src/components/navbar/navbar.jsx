import './Navbar.scss';
import Socials from '../Socials/Socials';

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'navbar ' + (menuOpen && "active") } id='navbar'>
      <div className='wrapper'>
        <div className="left">
          <a href="#header" className='logo'><span>Jesse Alvarado</span></a>
          <div className="item-container">
            <a><LinkedIn className='icon'/></a>
          </div>
          <div className="item-container">
            <a><GitHub className='icon'/></a>
          </div>
        </div>
        <div className="right">
          <Socials />
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
