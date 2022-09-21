import { Container } from "./styles"
import NasaIcon from "../../assets/nasa-icon.svg"
import LupaIcon from "../../assets/lupa-icon.svg"
 /* https://www.figma.com/file/Zov3N8u7Qeu3qUMsLdCxW7/NASA-Search-(Community)?node-id=9%3A3498
 */

function Home() {

  return (
    <Container>
      <div className="header">
        <div className="app-logo">
          <div>
            <img src={NasaIcon} alt="This figure shows the Icon of Nasa" />          
          </div>
          <div className="title">
            NASA Search
          </div>
        </div>
        <div className="subtitle">
          Find Something Amazing in our vast file library!
        </div>
        <div className="searchContainer">
            <input type="text" placeholder="Orion" alt=" here you type what you want to search"/> 
            <button >
              <img src={LupaIcon} alt="Click Here to Search what you want"  /> 
            </button>     
        </div>
      </div>
      <div className="results">
      </div>
    </Container>
  )
}

export default Home
