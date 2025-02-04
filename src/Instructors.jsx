import React from 'react'
import team from './team-1.jpg'
import team2 from './team-2.jpg'
import team3 from './team-3.jpg'
import team4 from './team-4.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

export default function Instructors() {
  return (
    <div className='container'>
        <div className='coursedata'>
            <div className='coursehr'><span><hr /></span><hr /></div>
            <div className='coursetittle'>INSTRUCTORS</div>
            <div className='coursehr'><span><hr /></span><hr /></div>
        </div>
            <h1 style={{textAlign:"center"}}>Expert Instructors</h1>
        <div className='INSTRUCTORS'>
            <div className='INSTRUCTORS1'>
                <img src={team} alt="" />
                <div className='INSTRUCTORS1data'>
                <div className='INSTRUCTORS1icon'><span><FaFacebookF/></span><span><FaTwitter/></span><span><IoLogoInstagram/></span></div>
                    <h2>Instructor Name</h2>
                    <p>Designation
                    </p>
                </div>
            </div>
            <div className='INSTRUCTORS1'>
                <img src={team2} alt="" />
                <div className='INSTRUCTORS1data'>
                <div className='INSTRUCTORS1icon'><span><FaFacebookF/></span><span><FaTwitter/></span><span><IoLogoInstagram/></span></div>
                    <h2>Instructor Name</h2>
                    <p>Designation
                    </p>
                </div>
            </div>
            <div className='INSTRUCTORS1'>
                <img src={team3} alt="" />
                <div className='INSTRUCTORS1data'>
                <div className='INSTRUCTORS1icon'><span><FaFacebookF/></span><span><FaTwitter/></span><span><IoLogoInstagram/></span></div>
                    <h2>Instructor Name</h2>
                    <p>Designation
                    </p>
                </div>
            </div>
            <div className='INSTRUCTORS1'>
                <img src={team4} alt="" />
                <div className='INSTRUCTORS1data'>
                <div className='INSTRUCTORS1icon'><span><FaFacebookF/></span><span><FaTwitter/></span><span><IoLogoInstagram/></span></div>
                    <h2>Instructor Name</h2>
                    <p>Designation
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
