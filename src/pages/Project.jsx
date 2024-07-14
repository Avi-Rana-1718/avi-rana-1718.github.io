import Footer from "../components/Footer";
import ListItem from "../components/ListItem";
import Nav from "../components/Nav";

export default function Projects() {
    return (
        <>
        <Nav />
        <main className="py-3 mt-5 text-sm">
        <h2 className="text-base mb-3 underline underline-offset-2">Projects</h2>
        <article>
            <ul className="list-disc">
                <ListItem title="Stranded" desc="A top-down, endless wave survival, shooter game made using C++ and SFML." link="https://github.com/Avi-Rana-1718/Stranded" tags={["gamedev", "C++", "SFML"]} />
                <ListItem title="Chime" desc="Chime is a simple and quick to use template/game engine made for making games using C++ and SFML." link="https://github.com/Avi-Rana-1718/Chime" tags={["gamedev", "C++", "SFML"]} />
                <ListItem title="bad-flappybird" desc="Attempt to make flappy bird in C++ with SFML" link="https://github.com/Avi-Rana-1718/bad-flappybird" tags={["gamedev", "C++", "SFML"]} />
            </ul>
        </article>
        </main>
        <Footer />
        </>
    )
}