import React from 'react'
import twitter from "../images/Twitter Icon.png"
import facebook from "../images/Facebook Icon.png"
import instagram from "../images/Instagram Icon.png"
import github from "../images/GitHub Icon.png"
import "../solop.css";

export default function FooterSP() {
    return (
        <div className='footer'>
            <a href='https://twitter.com/Patkoton'><img src={twitter} alt='' className='twitter' /></a>
            <a href='https://www.facebook.com/orukotanp/'><img src={facebook} alt='' className='facebook' /></a>
            <a href='https://www.instagram.com/patkoton/'><img src={instagram} alt='' className='instagram' /></a>
            <a href='https://github.com/patkoton'><img src={github} alt='' className='github' /></a>
        </div>
    )
}