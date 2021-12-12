import { Col, Container, Row } from 'react-bootstrap';
import './Header.scss';

export default function Header() {
  return (
    <Container className='header' id='header' >
        <div className="header-info">
          <h1>Hi, I'm Jesse</h1>
          <span className='subtitle'>I'm a Golang Developer<br />based in Tokyo</span>
        </div>
      <Row>
        <Col sm={5}>
          <div className="left">
          
          </div>
        </Col>
          <Col sm={7}>
            {/* <div className="img-bg"></div> */}
            <div className="right">
              <img src="personal-pic.png" alt="" className='personal-pic' />
            </div>       
        </Col>
      </Row>
    </Container>
  )
}
