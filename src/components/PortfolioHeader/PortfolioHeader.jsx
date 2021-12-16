import { Col, Container, Row } from 'react-bootstrap';
import './PortfolioHeader.scss';

export default function PortfolioHeader({ data }) {
  return (
    <Container className='portfolio-header' > 
 
      <Row>
        <Col sm={12} md={12} lg={6}>
          <div className="left">
            <div className="header-text">
              <h1>{data.title}</h1>
              <span className='subtitle'>{data.description}</span>
            </div>
          </div>
        </Col>
          <Col sm={12} md={12} lg={6}>
            <div className="right">
              <img src={data.img} alt="portfolio preview" className='' />
            </div>       
        </Col>
      </Row>
    </Container>
  )
}
