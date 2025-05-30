export default function TimelineItem({title, byline, time, thumbnail}) {
    return (
        <li className="block group px-2 py-2 rounded hover:bg-[#2d2d30]">
            {thumbnail!=null &&<img className="rounded h-24 mb-3" src={thumbnail} />}
            <span className="block group-hover:underline">{title}</span>
            <span className="text-xs text-[#919090] block">{byline}</span>
            <time className="text-xs text-[#888]">{new Date(time).getDate()+"th "+ (new Date(2024, new Date(time).getMonth(), 1).toLocaleString('default', { month: 'long' })) +" " + new Date(time).getFullYear()}</time>
        </li>
    )
}