import { Container, Row, Col } from 'react-bootstrap'
import './PortfolioBuiltBy.scss';

export default function PortfolioBuiltBy({ data }) {

  // remove 'Featured' if present
  data.tags = data.tags.filter(e => e !== 'Featured')

  return (
    <div className='portfolio-built-by' > 
      <div>
        <div >
          <h2>Built With</h2>
          <ul>
            {data.tags.map(tag => (
              <li>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
