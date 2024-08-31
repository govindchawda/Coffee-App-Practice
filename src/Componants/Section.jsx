import React from 'react'
import { IoIosHome } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
export default function Section() {
  return (
    <>
        <div  className='container'>
            <div className='section'>
                <div className='section1'>
                    <div className='icons'><FaGraduationCap/></div>
                    <h5>Skilled Instructors</h5>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
                <div className='section1'>
                <div className='icons'><TbWorld/></div>
                    <h5>Online Classes</h5>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
                <div className='section1'>
                <div className='icons'><IoIosHome/></div>
                    <h5>Home Projects</h5>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
                <div className='section1'>
                <div className='icons'><IoBookSharp/></div>
                    <h5>Book Library</h5>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
            </div>
        </div>
    </>
  )
}
