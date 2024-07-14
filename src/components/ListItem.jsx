export default function ListItem(props) {
    let { title, desc, link, tags } = props

    return (
        <li className="mt-3 list-[square]">
            <div className="flex">
            <a href={link} className="inline">{title} (</a>
            <ul className="flex text-xs">
                {tags.map((curr, index)=>{
                    return <li key={index}>{curr}{index!=tags.length-1?', ':''}</li>
                })}
            </ul>
            )
            </div>
            <p className="block mt-1 mb-3">{desc}</p>
            <a href={link} className="bg-[#2f3245] p-1.5 mt-3 rounded-sm hover:underline">Open<i className="fa-solid fa-up-right-from-square ml-1"></i></a>

        </li>
    )
}