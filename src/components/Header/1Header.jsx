import { Col, Container, Row } from 'react-bootstrap';
import './Header.scss';

export default function Header() {
  return (
    <Container className='header' id='header' > 
       
      <Row>
        <Col sm={12} md={5} lg={4}>
          <div className="left">
            <div className="header-text">
              <h1>Hi, I'm Jesse</h1>
              <span className='subtitle'>I'm a Golang Developer<br /> based in Tokyo</span>
            </div>
          </div>
        </Col>
          <Col sm={12} md={7} lg={8}>
            {/* <div className="img-bg"></div> */}
            <div className="right">
              <img src="personal-pic.png" alt="" className='personal-pic' />
            </div>       
        </Col>
      </Row>
    </Container>
  )
}
