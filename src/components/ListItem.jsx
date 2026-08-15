export default function ListItem({ label, href }) {
  return (
    <li>
      <a
        href={href}
        className="group bg-[#182a48] text-[#93C5FD] text-sm inline-block p-2 m-1 mt-2 rounded hover:underline hover:bg-[#213659]"
      >
        {label}
        <i className="fa-solid fa-square-up-right hidden ml-1 group-hover:inline"></i>
        <i className="fa-solid fa-square-arrow-up-right ml-1 group-hover:hidden"></i>
      </a>
    </li>
  );
}
