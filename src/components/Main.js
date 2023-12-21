import Nav from "./Nav.js";
import ListItem from "./ListItem.js";

function Main() {
  document.title="AviRana";
    return (
      <>
        <main className="bg-white"> 
        <Nav />
        <h3 className="text-2xl">Blogs</h3>
        <ul className="flex">
          <ListItem title="Website rewrite" url="/blog/website-rewrite" img={null} />
        </ul>
        <h3 className="text-2xl">Projects</h3>
        <ul className="flex">
        <ListItem title="Disha Learning" url="https://dishalearning.in" img="banner/disha.png" />
        <ListItem title="AnimeSoap" url="https://github.com/Avi-Rana-1718/AnimeSoap" img="banner/animesoap.png" />
        </ul>
        <h3 className="text-2xl">Resources</h3>
        <ul className="flex">
        <ListItem title="Linux basics" url="https://docs.google.com/document/d/1BRkVRpBxrCXfE1JTEp6mP2o01ZKxA4o2yimiAoNE9X4/edit#heading=h.dkgw1ybpigwy" img="https://opensource.com/sites/default/files/lead-images/tux_linux_penguin_code_binary.jpg" />
        </ul>
      </main>
      </>
    )
}

export default Main;