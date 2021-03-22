import React from 'react';
import video3 from '../mp4/1.mp4';
import {
  Link
} from "react-router-dom";

export default function Contact() {
  return (
    <body>
      <div className="video">
        <video autoPlay muted loop className="vid4">
        <source src={video3} type="video/mp4"/>
        </video>
      </div>

      <div className="content">
        <Link to="/"><h1>Matt Young</h1></Link>
        <ul>
        <a href="mailto:mattyoung.mgmt@gmail.com" target="_blank" rel="noreferrer"><h2>Email</h2></a>
        <a href="https://www.instagram.com/youngmattyoung/" target="_blank" rel="noreferrer"><h2>IG</h2></a>
        </ul>
      </div>
    </body>
  )
}