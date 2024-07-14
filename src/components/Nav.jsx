export default function Nav() {
    let date = new Date();

    return (
    <nav className="mt-20">
        <h1 className="text-4xl font-bold font-Bona_Nova"><a href="/">Avi Rana</a></h1>
        <small className="mb-5 block"><span id="getAge"></span>{date.getFullYear()-2004} yrs old - developer - gamer</small>
        <ul className="text-sm flex">
            <li><a href="/" className="py-0.5 mr-2 border-b-2 border-whites border-dotted hover:border-solid">Home</a></li>
            <li><a href="/projects" className="py-0.5 mr-2 border-b-2 border-whites border-dotted hover:border-solid">Projects</a></li>
            <li><a href="/blogs" className="py-0.5 mr-2 border-b-2 border-whites border-dotted hover:border-solid">Blogs</a></li>
            <li><a href="/socials" className="py-0.5 mr-2 border-b-2 border-whites border-dotted hover:border-solid">Socials</a></li>
        </ul>
    </nav>
    )
}