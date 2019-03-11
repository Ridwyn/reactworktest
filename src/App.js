import React, { Component } from "react";
import "./css/App.css";
import Frame2 from "./components/Frame2";
import Frame21 from "./components/Frame21";
import { Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Frame2} />
        <Route exact path="/frame21" component={Frame21} />

        <div className="nav">
          <Link to="/">Frame2</Link>
          <Link to="/frame21">Frame21</Link>
        </div>
      </div>
    );
  }
}

export default App;
