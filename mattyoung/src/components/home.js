import React from 'react';
import video from '../mp4/6.mp4';
import {
  BrowserRouter as Router,
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

      <Router>
        <div className="content">
          <Link to="/"><h1>Matt Young</h1></Link>
          <ul>
            <Link to="/stream"><h2>Stream</h2></Link>
            <Link to="/contact"><h2>Contact</h2></Link>
          </ul>
        </div>

      </Router>
    </body>
  )
}