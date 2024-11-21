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
            <small className="flex items-center pt-2">
                <svg className="mr-1" width="0.75rem" height="0.75rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <Link className="hover:underline" href="https://g.co/kgs/zRHLUwY">Chandigarh</Link>, <Link className="hover:underline" href="https://g.co/kgs/YPc3yVw">India</Link>
            </small>
        </nav>
    )
}