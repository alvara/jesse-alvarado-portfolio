import './Socials.scss';
import { GitHub, LinkedIn } from '@material-ui/icons';

export default function Socials() {
  return (
    <div className='socials hide'>
      <div className="item-container">
        <a href='https://www.linkedin.com/in/jesse-alvarado/' target="_blank"><LinkedIn className='icon'/></a>
      </div>
      <div className="item-container">
        <a href='https://github.com/alvara' target="_blank"><GitHub className='icon'/></a>
      </div>
    </div>
  )
}
