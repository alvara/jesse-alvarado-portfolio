import PortfolioItem from '../PortfolioItem/PortfolioItem';
import './Portfolio.scss';
import { useEffect, useState } from 'react';
import { portfolio } from '../../data';

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "go",
      title: "Go"
    },
    {
      id: "react",
      title: "React"
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
    console.log(filtered_items);
    setData(filtered_items);

    return filtered_items.length === 0 ? filtered_items : "featured"
  },[selected]);

  return (
    <div className='portfolio' id='portfolio'>
      <h2>Portfolio</h2>
      <ul>
        {list.map((item) => (
          <PortfolioItem title={item.title} id={item.id} key={item.id} active={selected === item.id} setSelected = {setSelected}/>
        ))}
      </ul>
      <div className="portfolio-wrapper">

        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="{d.title} image" />
            <h3>{d.title}</h3>
            <p>{d.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
