import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {

    let date = new Date();
    let ageInYears = date.getFullYear()-2004;

    return (
        <nav className="leading-4">
            <Link to={"/"}>
             <h3 className="text-5xl font-bold">AviRana</h3>
             </Link>
            <small className="mt-2 block">{ageInYears} yrs old - developer - gamer</small>
            <small className="block text-[#949393] pt-1">
            <FontAwesomeIcon icon={faLocationDot} className="mr-1 text-xs"/>
                <Link className="hover:underline" to="https://g.co/kgs/zRHLUwY">Chandigarh</Link>,<Link className="hover:underline" to="https://g.co/kgs/YPc3yVw">India</Link>
            </small>
        </nav>
    )
}