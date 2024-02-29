import Navbar from '@/components/Navbar';
import Link from 'next/link';
export default function Home() {
  return (
     <section className="md:flex md:justify-center w-full my-16">
  {/* Projects */}
    <div className="p-3 my-8 mx-5 bg-[#D9D9D9] rounded-sm -rotate-3 md:w-[25vw] md:h-[25vh] text-left">
    <h3 className="text-base">Projects</h3>
    <ul className="border-2 border-[#bcbbbb] border-solid p-2">
      <li><a href="https://github.com/Avi-Rana-1718/bad-flappybird" className="text-[#888] hover:underline hover:text-[#282828]">bad-flappybird</a></li>
      <li><a href="https://ans.dishalearning.in/" className="text-[#888] hover:underline hover:text-[#282828]">ans.dishalearning.in</a></li>
      <li><a href="https://dishalearning.in/" className="text-[#888] hover:underline hover:text-[#282828]">dishalearning.in</a></li>
    </ul>
    </div>

    {/* Blogs */}
    <div className="p-3 my-8 mx-5 bg-[#D9D9D9] rounded-sm rotate-3 md:w-[25vw] md:h-[25vh] text-left">
    <h3 className="text-base">Blogs</h3>
    <ul className="border-2 border-[#bcbbbb] border-solid p-2">
      <li><Link href="blogs/gamedev1" className="text-[#888] hover:underline hover:text-[#282828]">gamedev1</Link></li>
      <li><Link href="blogs/website-rewrite" className="text-[#888] hover:underline hover:text-[#282828]">website rewrite</Link></li>
    </ul>
    </div>

    {/* Socials */}
    <div className="p-3 my-8 mx-5 bg-[#D9D9D9] -rounded-sm rotate-3 md:w-[25vw] md:h-[25vh] text-left">
    <h3 className="text-base">Socials</h3>
    <ul className="border-2 border-[#bcbbbb] border-solid p-2">
      <li><a href="https://github.com/Avi-Rana-1718" className="text-[#888] hover:underline hover:text-[#282828]">Github</a></li>
      <li><a href="https://www.linkedin.com/in/avi-rana/" className="text-[#888] hover:underline hover:text-[#282828]">LinkedIn</a></li>
      <li><a href="https://twitter.com/_AviRana" className="text-[#888] hover:underline hover:text-[#282828]">Twitter</a></li>
    </ul>
    </div>
      </section>
  );
}
