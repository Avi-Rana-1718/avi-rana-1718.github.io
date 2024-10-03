import { useEffect, useState } from "react"

export default function Nav() {

    let date = new Date();
    let ageInYears = date.getFullYear()-2004;

    return (
        <nav className="leading-3">
            <h3 className="text-5xl font-bold">AviRana</h3>
            <small className="">{ageInYears} yrs old - developer - gamer</small>
        </nav>
    )
}