import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Socials() {
    return (
        <>
        <Nav />
        <main className="py-3 mt-5 text-sm">
        <h2 className="text-base mb-3 underline underline-offset-2">Projects</h2>
        <article>
            <ul className="list-[square]">
            <li className="pb-1"><a href="https://github.com/Avi-Rana-1718" className="hover:underline decoration-wavy underline-offset-4">github</a></li>
                <li className="pb-1"><a href="https://www.linkedin.com/in/avi-rana/" className="hover:underline decoration-wavy underline-offset-4">linkedIn</a></li>
                <li className="pb-1"><a href="https://twitter.com/_AviRana" className="hover:underline decoration-wavy underline-offset-4">twitter</a></li>
            </ul>
        </article>
        </main>
        <Footer />
        </>
    )
}