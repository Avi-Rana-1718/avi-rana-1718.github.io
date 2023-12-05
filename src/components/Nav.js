import "./Nav.css";
import Socials from "./Socials";

function Nav() {
    return (
        <nav>
        <h1>Hi, my name is <span className="underline">Avi</span></h1>
        <span>I try to make cool stuff in my freetime</span>
        <Socials />
        </nav>
    )
}

export default Nav;