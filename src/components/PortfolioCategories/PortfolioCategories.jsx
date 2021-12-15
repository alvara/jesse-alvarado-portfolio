import './PortfolioCategories.scss';

export default function PortfolioCategories({title, id, active, setSelected}) {
  return (
    <li className={active ? "portfolio-category active" : "portfolio-category"} onClick={() => setSelected(id)}>
      {title}
    </li>
  )
}
