import './Navbar.scss';
import { GitHub, LinkedIn } from '@material-ui/icons';

export default function Navbar() {
  return (
    <div className='navbar active' id='navbar'>
      <div className='wrapper'>
        <div className="left">
          <a href="#header" className='logo'><h1>Jesse Alvarado</h1></a>
          <div className="item-container">
            <a><LinkedIn className='icon'/></a>
          </div>
          <div className="item-container">
            <a><GitHub className='icon'/></a>
          </div>
          <a href="#portfolio">Portfolio</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>

     
        </div>
      </div>
    </div>
  )
}
