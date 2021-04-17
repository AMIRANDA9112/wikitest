
import React, { Component } from 'react';

import './App.css';

import { BrowserRouter as Router, Route} from "react-router-dom";

import Decode from "./Component/Decode/index";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Decode} />
    </Router>
    );
  }
}

export default App;
