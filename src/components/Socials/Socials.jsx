import './Socials.scss';
import { GitHub, LinkedIn } from '@material-ui/icons';

export default function Socials() {
  return (
    <div className='socials hide'>
      <div className="item-container">
        <a><LinkedIn className='icon'/></a>
      </div>
      <div className="item-container">
        <a><GitHub className='icon'/></a>
      </div>
    </div>
  )
}
