import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import Home from "./Home.js";
import Welcome from "./Welcome.js";
import Navigation from "./Navigation.js";
import Login from "./Login.js";
import Meetings from "./Meetings.js";
import Register from "./Register.js";

import { Router, navigate } from "@reach/router";

import firebase from "./Firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      displayName: null,
      userID: null
    };
  }

  componentDidMount() {
    // Access the application
    firebase.auth().onAuthStateChanged(FBUser => {
      if (FBUser) {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
      }
    });
  }

  //Receives a username
  registerUser = async userName => {
    // Whenever something changes about the registration
    await firebase.auth().onAuthStateChanged(FBUser => {
      // Update the firebase profile with the user associated with the registration
      FBUser.updateProfile({
        displayName: userName
      }).then(() => {
        // Once the firebase update is done, import that date to the app state
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
        // Land the user on the meetings page
        navigate("/meetings");
      });
    });
  };

  logOutUser = async e => {
    e.preventDefault();
    this.setState({
      displayName: null,
      userID: null,
      user: null
    });
    await firebase.auth().signOut();
    navigate("/login");
  };

  render() {
    return (
      <div>
        <Navigation user={this.state.user} logOutUser={this.logOutUser} />
        {this.state.user && (
          <Welcome
            userName={this.state.displayName}
            logOutUser={this.logOutUser}
          />
        )}

        <Router>
          <Home path="/" user={this.state.user} />
          <Login path="/login" />
          <Meetings path="/meetings" />
          <Register path="/register" registerUser={this.registerUser} />
        </Router>
      </div>
    );
  }
}

export default App;
