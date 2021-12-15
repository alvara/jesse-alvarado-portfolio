import { Container } from 'react-bootstrap';
import './About.scss';

export default function About() {
  return (
    <Container className='about' id='about'>
      <h2>About</h2>
      <div className="about-text">
        <p>I'm a team-oriented fullstack developer with a background in business and information technology.</p>
        <p>I graduated Western Washington University with a BA in Management Information Systems in 2016, and worked as a software engineer at a private laser systems import company in Japan for 5 years. Since it was a small company with only 10 employees at the time, I juggled many roles and responsibilities, from managing the internal network and security, providing on-site software support for our clients, creating a wordpress website with a portfolio of over 100 products, and taking initiative to launch the company's first digital marketing campaigns.</p>
        <p>The challenge of pushing myself to learn new skills in other fields outside of software development has been very beneficial as it allows me to weave my past experiences and apply them to new business challenges.</p>
        <p>I recently decided to move back to the development side of business, working on projects using Go(Golang), Google Cloud Platform (GCP), and cutting-edge frontend frameworks such as React and Svelte.</p>
      </div>
    </Container>
  )
}
