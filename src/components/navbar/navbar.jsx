import './Navbar.scss';

export default function Navbar() {
  return (
    <div className='navbar' id='navbar'>
      <div className='wrapper'>
        <div className="left">
          <a href="/">Jesse Alvarado</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}
