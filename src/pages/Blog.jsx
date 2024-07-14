import BlogItem from "../components/BlogItem";
import Footer from "../components/Footer";
import Nav from "../components/Nav";


export default function Blog() {
    return (
        <>
        <Nav />
        <main className="py-3 mt-5 text-sm">
        <h2 className="text-base mb-3 underline underline-offset-2">Blogs</h2>
        <article>
            <span>Coming soon</span>
        </article>
        </main>
        <Footer />
        </>
    )
}