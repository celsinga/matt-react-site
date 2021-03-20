import './App.css';
import Home from './components/home.js';
import Contact from './components/contact.js';
import Stream from './components/stream.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
