import { Container, Row, Col } from 'react-bootstrap';
import './About.scss';

export default function About() {
  return (
    <Container className='about'>
      <h2>About</h2>
      <div className="about-text">
        <p>I'm a team-oriented fullstack developer with a background in business and information technology.</p>
        <p>I graduated Western Washington University with a BA in Management Information Systems in 2016, and worked as a software engineer at a private laser systems import company in Japan for 5 years. Since it was a small company of only 10 employees, I juggled many roles and responsibilities, from managing the internal network and security, providing onsite software support for our clients, created the homepage with a portfolio of over 100 products, and led the companies first digital marketing campaigns.</p>
        <p>For me, the challenge of pushing myself to learn new skills in other fields has been very beneficial as it allows me to weave learned knowledge and apply them to business challenges.</p>
        <p>I am currently focusing on web projects using Go/Golang, Google Cloud Platform (GCP), and modern frontend frameworks such as React and Svelte.</p>
      </div>
    </Container>
  )
}
