import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Nav() {

    let date = new Date();
    let ageInYears = date.getFullYear()-2004;

    return (
        <nav className="leading-3">
            <Link to={"/"}>
             <h3 className="text-5xl font-bold">AviRana</h3>
             </Link>
            <small className="">{ageInYears} yrs old - developer - gamer</small>
        </nav>
    )
}