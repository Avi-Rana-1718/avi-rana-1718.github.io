
export default function ListItem(props) {
    return (
        <li className="m-3 shadow-[-7px_7px] shadow-[#181818] border-solid border-2 border-slate-600 hover:shadow-[-2px_4px] hover:px-1 transition-all bg-[#313237]">
        <a href={props.url}>
           <p className="p-2">
               {props.title}
               <i class="fa-solid fa-arrow-up-right-from-square text-blue-600 m-0.5"></i>
           </p>
           </a>
   </li>
    )
}