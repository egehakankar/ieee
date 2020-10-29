import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home.js"
import AboutUs from "./Components/AboutUs.js"
import Team from "./Components/Team.js"
import Social from "./Components/Social.js"
import Technical from "./Components/Technical.js"
import TechEvent from "./Components/TechEvent.js"
import SocialEvent from "./Components/SocialEvent.js"
import './App.css';
import Header from "./Components/Header.js"
import Footer from "./Components/Footer.js"

class App extends Component {
  constructor() {
    super()
    this.state =
    {
      mount: false,
    }
  }

  componentDidMount() {
    this.setState(state => ({
      mount: true,
    }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header mount={this.state.mount} />
          <div className="bodyHome">
            <Route exact path="/"><Home /></Route>
            <Route exact path="/aboutUs"><AboutUs /></Route>
            <Route exact path="/team"><Team /></Route>
            <Route exact path="/social"><Social /></Route>
            <Route exact path="/technical"><Technical /></Route>
            <Route exact path="/technical/:eventTitle" component={TechEvent}></Route>
            <Route exact path="/social/:eventTitle" component={SocialEvent}></Route>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;



