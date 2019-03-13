import React, { Component } from "react";
import "./css/App.css";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Screen1 from "./components/Screen1";
import Quotation from "./components/Quotation";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import MainPage from './components/MainPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
       <MainPage/>
        <Footer />
      </div>
    );
  }
}

export default App;
