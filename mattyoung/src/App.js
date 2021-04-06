import './App.css';
import Home from './components/home.js';
import Contact from './components/contact.js';
import Stream from './components/stream.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import song from './MattSong.mp3';
import song2 from './Song2.mp3';
import song3 from './Song3.mp3';
import song4 from './Velvet.mp3';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

const muiTheme = createMuiTheme({});

function App() {
  return (
    <div className="App">
      
    <Router>

      <Switch>
        <Route path="/stream">
          <Stream />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>
    </div>
  );
}

export default App;


// {/* <ThemeProvider theme={muiTheme}>
//         <AudioPlayer src={song4} />
//       </ThemeProvider>; */} */}
//     {/* <audio src={song} id="theme-song" autoplay="autoplay"></audio> */}
//     {/* {/* <audio src={song2} id="theme-song" autoplay="autoplay"></audio> */}
//     {/* <audio src={song3} id="theme-song" autoplay="autoplay"></audio> */}
//     {/* <audio src={song4} id="theme-song" autoplay="autoplay"></audio> */}