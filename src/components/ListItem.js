function ListItem(props) {
return (
    <li className="m-3 rounded-md shadow-[rgba(0,0,0,0.05)_0px_6px_24px_0px,rgba(0,0,0,0.08)_0px_0px_0px_1px] hover:rotate-6 transition-all">
         <a href={props.url}>
         <img className=" w-64 rounded-t-md" src={props.img}  alt="banner_img"/>
            <p className="p-2">
                {props.title}
                <i class="fa-solid fa-arrow-up-right-from-square text-blue-600 m-0.5"></i>
            </p>
            </a>
    </li>
)
}

export default ListItem;