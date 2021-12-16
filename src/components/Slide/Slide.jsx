import { Container } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser'; 
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

        <div className='left-images'>
          {data.left_imgs.length > 0 ? (
              data.left_imgs.map((img,i) => (
                <img src={img} alt={img.title} key={i} />
              ))
          ) : ''}
        </div>
        
        <div className='details'>
          <p>{ ReactHtmlParser (data.details)}</p>
        </div>
        {data.right_imgs.length > 0 ? (
            data.right_imgs.map((img,i) => (
              <img src={img} alt={img.title} key={i} />
            ))
        ) : ''}

      </div>

      <div className='bottom-images'>
        {data.bottom_imgs.map((img,i) => (
          <img src={img} alt={img.title} key={i} />
        ))}
      </div>

    </Container>
  )
}
