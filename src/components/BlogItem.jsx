export default function BlogItem(props) {
    let {title, link, time} = props;
    return (
        <li className="mt-3 list-[square]">
            <a href={link} className="inline">
            <time>{time}</time>
            <span>{title}</span>
            <p className="block mt-1 mb-3"></p>
            </a>
        </li>
    )
}