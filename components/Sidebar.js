import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="p-4 bg-[#181818] md:h-[100vh] border-r-2 border-slate-600 border-solid">
            <ul className="flex md:block">
            <li className="hover:underline hover:bg-[#181818] p-1 whitespace-nowrap hover:text-[#95a3f1]"><Link href="/home">Home</Link></li>
            <li className="hover:underline hover:bg-[#181818] p-1 whitespace-nowrap hover:text-[#95a3f1]"><Link href="/home">Projects</Link></li>
            <li className="hover:underline hover:bg-[#181818] p-1 whitespace-nowrap hover:text-[#95a3f1]"><Link href="/home">Resources</Link></li>
            <li><hr className="my-2"/></li>
            <li className="hover:underline hover:bg-[#181818] p-1 whitespace-nowrap hover:text-[#95a3f1]"><Link href="/github">Socials<i class="fa-solid fa-square-arrow-up-right"></i></Link></li>
            </ul>

        </aside>
    )
}