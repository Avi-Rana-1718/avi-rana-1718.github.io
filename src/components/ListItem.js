import "./ListItem.css";

function ListItem(props) {
return (
    <li className="listLi">
         <a href={props.url}>
         <img src={props.img}  alt="banner_img"/>
            <p>
                {props.title}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </p>
            </a>
    </li>
)
}

export default ListItem;