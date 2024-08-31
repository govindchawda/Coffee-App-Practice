import React from 'react'
import { FaBook } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav>
      <a href=""><span> <FaBook/></span>&nbsp; <b>eLEARNING</b></a>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Courses</a></li>
            <li style={{backgroundColor:"#06bbcc",color:"#fff"}}>Join Now <span><FaArrowRight/></span></li>
        </ul>
    </nav>
  )
}
