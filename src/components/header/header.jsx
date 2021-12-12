import { Col, Container, Row } from 'react-bootstrap';
import './Header.scss';

export default function Header() {
  return (
    <Container className='header' id='header' >
        <div className="header-info">
          <h1>Hi, I'm Jesse</h1>
          <p>I'm a Web 3.0 Developer<br />based in Tokyo</p>
        </div>
      <Row>
        <Col sm={5}>
          <div className="left">
          
          </div>
        </Col>
          <Col sm={7}>
            <div className="right">
              <img src="personal-pic.png" alt="" className='personal-pic' />
            </div>       
        </Col>
      </Row>
    </Container>
  )
}
