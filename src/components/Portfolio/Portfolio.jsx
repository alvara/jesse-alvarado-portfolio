import PortfolioCategories from '../PortfolioCategories/PortfolioCategories';
import './Portfolio.scss';
import { useEffect, useState } from 'react';
import { portfolio } from '../../data';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "rails",
      title: "Ruby On Rails"
    },
    {
      id: "ai",
      title: "AI"
    },
  ]



  // whenever selected change, update data with useEffect
  useEffect(() => {
    const filtered_items = portfolio.filter((item) => {
      return item.tags.includes(selected);
    });
    setData(filtered_items);

    return filtered_items.length === 0 ? filtered_items : 'Featured'
  },[selected]);

  return (
    <div className='portfolio' id='portfolio'>
      <h2>My Portfolio</h2>
      <ul>
        {list.map((item) => (
          <PortfolioCategories title={item.title} id={item.id} key={item.id} active={selected === item.id} setSelected = {setSelected}/>
        ))}
      </ul>
      <Container className="portfolio-wrapper">
        {data.map((d) => (
          <Link to={'/portfolio/' + d.slug}>
            <div className="item" key={d.slug}>
              <img src={d.img} alt={d.title + " image"} />
              <div className="item-text">
                <h3>{d.title}</h3>
                <p className='opacity-100'>{d.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </Container>
    </div>
  )
}
