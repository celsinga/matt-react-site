import React from 'react';
import video from '../mp4/6.mp4';
import {
  Link
} from "react-router-dom";

export default function Home() {
  return (
    <body>
      <div className="video">
        <video autoPlay muted loop className="vid4">
        <source src={video} type="video/mp4"/>
        </video>
      </div>

      <div className="content">
        <a href="https://open.spotify.com/album/699MjXfaoKLn0Ekds06Vpn?si=H0V8izUTRPima59M-GShiQ" target="_blank" rel="noreferrer"><h1>Matt Young</h1></a>
        <ul>
          <Link to="/stream"><h2>Stream</h2></Link>
          <Link to="/contact"><h2>Contact</h2></Link>
        </ul>
      </div>

    </body>
  )
}