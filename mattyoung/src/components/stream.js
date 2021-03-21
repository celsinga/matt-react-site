import React from 'react';
import video2 from '../mp4/5.mp4';
import {
  Link
} from "react-router-dom";

export default function Stream() {
  return (
    <body>
      <div className="video">
        <video autoPlay muted loop className="vid4">
        <source src={video2} type="video/mp4"/>
        </video>
      </div>

      <div className="content">
      <Link to="/"><h1>Matt Young</h1></Link>
        <ul>
        <Link to="/contact"><h2>Contact</h2></Link>
        </ul>
        <iframe src="https://open.spotify.com/embed/album/699MjXfaoKLn0Ekds06Vpn" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>

      
      
    </body>
  )
}