import { Sora } from "next/font/google";
const sora = Sora({ subsets: ['latin'] });

export default function Nav() {
    return (
        <nav className={`${sora.className} mb-4`}>
        <h1 className="text-4xl font-[700]">Hi, my name is <span className="underline decoration-[#3A53E3]">Avi</span></h1>
        <span>I try to make cool stuff in my freetime</span>
        </nav>
    )
}