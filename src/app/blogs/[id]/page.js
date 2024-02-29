import Link from 'next/link';

export default async function Blogs({params}) {

    let res = await fetch("https://raw.githubusercontent.com/Avi-Rana-1718/avi-rana-1718.github.io/main/public/blogs/" + params.id + ".json");
    let data = await res.json();

    let date = new Date(data.timestamp);
    return (
        <section className="md:flex justify-center w-full my-16">
            <article className="bg-[#D9D9D9] p-3 text-left md:w-[50vw] rounded-sm">
                <span className="text-[#5151c4]"><Link href="/">/</Link></span>
                <h2 className="text-lg">{data.title}</h2>
                <time className="text-sm">{date.getDate() + "/" + Number(date.getMonth()+1)+ "/" + date.getFullYear()}</time>
                <p className="my-2" dangerouslySetInnerHTML={{__html: data.content}}></p>
            </article>
        </section>
    )
}