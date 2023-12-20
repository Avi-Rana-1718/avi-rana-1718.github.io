function ListItem(props) {
return (
    <li className="m-3 shadow-xl rounded-md">
         <a href={props.url}>
         <img className="rounded-t-md" src={props.img}  alt="banner_img"/>
            <p className="p-2">
                {props.title}
                <i class="fa-solid fa-arrow-up-right-from-square text-blue-600 m-0.5"></i>
            </p>
            </a>
    </li>
)
}

export default ListItem;