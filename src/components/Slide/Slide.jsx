import { Container } from 'react-bootstrap';
import './Slide.scss';

export default function Slide({ data }) {
  return (
    // TODO: gracefully catch null values
    <Container className='slide'>
      <h2>{data.title}</h2>
      <div className='top-images'>
        {data.top_imgs.map((img,i) => (
          <img src={img} alt={img.title} key={i} />
        ))}
      </div>
      <div className='middle-row'>
        <div className='left-images'></div>
        <div className='details'>
          <p>{data.details}</p>
        </div>
        <div className='right-images'></div>
      </div>
      <div className='bottom-images'></div>
    </Container>
  )
}
