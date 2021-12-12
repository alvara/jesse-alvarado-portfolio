import './Navbar.scss';
import Socials from '../Socials/Socials';


export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'navbar ' + (menuOpen && "active") } id='navbar'>
      <div className='wrapper'>
        <div className="left">
          <a href="#header" className='logo' onClick={()=>setMenuOpen(false)}><span className='name-logo'>Jesse Alvarado</span></a>
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
