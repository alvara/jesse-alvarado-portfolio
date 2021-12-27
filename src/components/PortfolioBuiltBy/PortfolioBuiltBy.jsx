import { Container, Row, Col } from 'react-bootstrap'
import './PortfolioBuiltBy.scss';

export default function PortfolioBuiltBy({ data }) {

  // remove 'Featured' if present
  data.tags = data.tags.filter(e => e !== 'Featured')

  // populate images array for matching tags
  let images = []
  data.tags.map((tag, i) => {
    switch (tag) {
      case "google-maps":
        images.push(<img src="/icons/google-maps.png" alt="Google Maps" key={i} />)
        break
      case "mapbox":
        images.push(<img src="/icons/mapbox.png" alt="MapBox" key={i} />)
        break
      case "rails":
        images.push(<img src="/icons/rails.png" alt="Ruby On Rails" key={i} />)
        break
      case "gpt3":
        images.push(<img src="/icons/gpt3.png" alt="Open AI GPT-3" key={i} />)
        break
      case "meteorjs":
        images.push(<img src="/icons/meteorjs.png" alt="Meteor JS" key={i} />)
        break
      case "sass":
        images.push(<img src="/icons/sass.png" alt="Sass" key={i} />)
        break
      case "bootstrap":
        images.push(<img src="/icons/bootstrap.png" alt="Bootstrap" key={i} />)
        break
      case "heroku":
        images.push(<img src="/icons/heroku.png" alt="Heroku" key={i} />)
      break
      case "bitbucket":
        images.push(<img src="/icons/bitbucket.png" alt="Bitbucket" key={i} />)
        break
      case "figma":
        images.push(<img src="/icons/figma.png" alt="Figma" key={i} />)
        break
      case "rsync":
        images.push(<img src="/icons/rsync.png" alt="R Sync" key={i} />)
        break
      case "electron":
        images.push(<img src="/icons/electron.png" alt="Electron JS" key={i} />)
        break
    }
  })

  console.log(images)

  return (
    <div className='portfolio-built-by' > 
      <div>
        <div >
          <h2>Built With</h2>
          <ul>
            {images}
          </ul>
        </div>
      </div>
    </div>
  )
}
