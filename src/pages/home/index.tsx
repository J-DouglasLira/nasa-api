import { Container } from "./styles"
import NasaIcon from "../../assets/nasa-icon.svg"

function Home() {

  return (
    <Container>
      <div className="header">
        <div className="app-logo">
          <div>
            <img src={NasaIcon} alt="Nasa Icon" />          
          </div>
          <div className="title">
            NASA Search
          </div>
        </div>
        <div className="subtitle">
          Find Something Amazing in our vast file library!
        </div>
        <div className="search">
          Origin
        </div>
      </div>
    </Container>
  )
}

export default Home
