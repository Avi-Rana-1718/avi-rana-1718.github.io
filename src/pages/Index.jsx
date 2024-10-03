import ListItem from "../components/ListItem";
import Nav from "../components/Nav";

export default function Index() {
    return (
        <>
        <main className="p-4">
             <Nav />
                <p className="mt-10">
                Hello! My name is Avi Rana! I am computer science student. I try to make cool stuff in my freetime. I like web dev and am somewhat into gamedev.
                </p>
             <h5 className="text-3xl font-bold mt-10">Projects</h5>
             <ul>
                <ListItem label="java-wordle" href="https://github.com/Avi-Rana-1718/java-wordle" />
                <ListItem label="dishalearning" href="https://github.com/Avi-Rana-1718/dishalearning" />
                <ListItem label="draw-it" href="https://github.com/Avi-Rana-1718/draw-it" />
                <ListItem label="Stranded" href="https://github.com/Avi-Rana-1718/Stranded" />
                <ListItem label="bad-flappybird" href="https://github.com/Avi-Rana-1718/bad-flappybird" />
             </ul>

             <h5 className="text-3xl font-bold mt-10">Contact me</h5>
             <ul>
                <ListItem label="github" href="https://github.com/Avi-Rana-1718" />
                <ListItem label="linkedin" href="https://www.linkedin.com/in/avi-rana/" />
                <ListItem label="twitter" href="https://x.com/_AviRana" />
                <ListItem label="myanimelist" href="https://myanimelist.net/profile/_AviRana" />
             </ul>
        </main>
        </>
    )
}