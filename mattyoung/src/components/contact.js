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
        <h1>Matt Young</h1>
        <ul>
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/stream"><h2>Stream</h2></Link>
        </ul>
      </div>
    </body>
  )
}