function ListItem(props) {
return (
    <li className="m-3 shadow-[-7px_7px] shadow-[#353935] border-solid border-2 border-[#353935]  hover:shadow-[-2px_4px] transition-all dark:bg-[#313237] dark:shadow-[#55565e]">
         <a href={props.url}>
            <p className="p-2">
                {props.title}
                <i class="fa-solid fa-arrow-up-right-from-square text-blue-600 m-0.5"></i>
            </p>
            </a>
    </li>
)
}

export default ListItem;