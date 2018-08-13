import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Submodule from "@penx/modular-subroute-example";

class App extends Component {
  render() {
    return (
      <Router basename={'/modular-routes-example'}>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/tbc">TBC</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" render={() => <h1>Home</h1>}/>
          <Route path="/about" render={(props) => <div><h1>About</h1><Submodule {...props} basename={'/modular-routes-example/about'} /></div>} />
          <Route path="/topics" render={(props) => <div><h1>Topics</h1><Submodule {...props} basename={'/modular-routes-example/topics'} /></div>} />
          <Route path="/tbc" render={(props) => <div><h1>TBC</h1><Submodule {...props} basename={'/modular-routes-example/tbc'} /></div>} />
        </div>
      </Router>
    );
  }
}

export default App;
