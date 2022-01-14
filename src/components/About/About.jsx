import { Container } from 'react-bootstrap';
import './About.scss';

export default function About() {
  return (
    <Container className='about' id='about'>
      <h2>My Story</h2>
      <div className="about-text">
        <p>I'm a team-oriented frontend developer with a background in business and information technology.</p>
        <p>I graduated Western Washington University with a BA in Management Information Systems in 2016 and worked as a software engineer at a private laser systems import company in Tokyo for 5 years. Being a small company, I juggled many roles and responsibilities, from managing the internal network and security, providing on-site software support for clients, creating and managing a site with over 100 products, and taking initiative, leading the launch of our first digital marketing campaigns.</p>
        <p>I enjoy the challenge of pushing myself to learn new skills in fields outside of software development. It allows me to weave my past experiences and apply them to new business challenges. My goal for 2022 is to shift towards fullstack and learn Go(Golang), Google Cloud Platform (GCP), and modern frontend frameworks such as React and Svelte in order to create serverless solutions.</p>
      </div>
    </Container>
  )
}
