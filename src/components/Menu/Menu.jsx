import Socials from '../Socials/Socials';
import './Menu.scss';


export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={'menu ' + (menuOpen && "active")}>
      <ul>
        <li><a href="#portfolio" onClick={()=>setMenuOpen(false)}>Portfolio</a></li>
        <li><a href="#blog" onClick={()=>setMenuOpen(false)}>Blog</a></li>
        <li><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></li>
        <li><Socials/></li>
      </ul>
    </div>
  )
}
