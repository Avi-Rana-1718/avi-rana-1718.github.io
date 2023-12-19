import Nav from "./Nav.js";
import ListItem from "./ListItem.js";

import "./Main.css";

function Main() {
  document.title="AviRana";
    return (
      <>
          <Nav />
        <main>
        <h3>Projects</h3>
        <ul className="MainList">
        <ListItem title="Disha Learning" url="https://dishalearning.in" img="banner/disha.png" />
        <ListItem title="AnimeSoap" url="https://github.com/Avi-Rana-1718/AnimeSoap" img="banner/animesoap.png" />
        </ul>
        <h3>Resources</h3>
        <ul className="MainList">
        <ListItem title="Linux basics" url="https://docs.google.com/document/d/1BRkVRpBxrCXfE1JTEp6mP2o01ZKxA4o2yimiAoNE9X4/edit#heading=h.dkgw1ybpigwy" img="https://opensource.com/sites/default/files/lead-images/tux_linux_penguin_code_binary.jpg" />
        </ul>
      </main>
      </>
    )
}

export default Main;