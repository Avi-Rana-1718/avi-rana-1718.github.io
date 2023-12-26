import Socials from "./Socials";

function Nav() {
    return (
        <nav className="">
        <h1 className="text-4xl font-['Sora'] font-[700]">Hi, my name is <span className="underline decoration-brand">Avi</span></h1>
        <span>I try to make cool stuff in my freetime</span>
        <Socials />
        </nav>
    )
}

export default Nav;