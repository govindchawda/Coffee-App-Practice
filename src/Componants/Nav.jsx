import { Banner } from "./Banner"
import img1 from '../logo.png'
 import React from "react"
 import { Link } from "react-router-dom"
export const Nav = ()=>{
    return(
        <>
            <nav>
        <img src={img1} alt="" />
                <ul>
                    <li><Link to="/a">Home</Link></li>
                    <li><Link to="/b">About</Link></li>
                    <li><Link to="/c">Servics</Link></li>
                    <li><Link to="/d">Contact</Link></li>
                </ul>
            </nav>
            <Banner/>
        </>
    )
}