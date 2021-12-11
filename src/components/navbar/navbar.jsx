import './Navbar.scss';

export default function Navbar() {
  return (
    <div className='navbar' id='navbar'>
      <div className='wrapper'>
        <div className="left">
          <a href="#header" className='logo'><h1>Jesse Alvarado</h1></a>
          <div className="item-container">
            <a href="#about" className="item">Contact: contact@jessealvarado.com</a>
          </div>
      
        </div>
        <div className="right">
          <a href="#portfolio">Portfolio</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  )
}
