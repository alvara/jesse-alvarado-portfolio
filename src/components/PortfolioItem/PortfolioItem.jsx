import './PortfolioItem.scss';

export default function PortfolioItem({title, id, active, setSelected}) {
  return (
    <li className={active ? "portfolio-item active" : "portfolio-item"} onClick={() => setSelected(id)}>
      {title}
    </li>
  )
}
