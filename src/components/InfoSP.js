import React from 'react'
import "../solop.css";
import profpic from "../images/20220505_140225.jpg"
import email from "../images/Icon.png"
import linkedIn from "../images/linkedin.png"

export default function Info() {
    return (
        <div>
            <img src={profpic} alt='' className='profpic' />
            <p className='name'>Sike Orukotan</p>
            <p className='stack'>Frontend Developer</p>
            <a className='website' href='https://dev-learningwordp.pantheonsite.io/'>dev-learningwordp.pantheonsite.io</a>
            <a className='btn btn1' href='mailto:patkoton@yahoo.com? 
                                          subject=subject text'>
                <img src={email} alt='' className='emailIcon' />
                <p className='temail'>Email</p>
            </a>
            <a className='btn btn2' href='https://www.linkedin.com/in/orukotan-patience-oluwasikemi-03a778ba/'>
                <img src={linkedIn} alt='' className='linkIcon' />
                <p className='tlink'>LinkedIn</p> 
            </a>
            {/* <button className='btn2'>
                <img src={linkedIn} alt='' className='linkIcon' />
                <p className='tlink'>LinkedIn</p>
            </button> */}
        </div>
    )
}