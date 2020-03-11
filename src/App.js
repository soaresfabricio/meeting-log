import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import Home from './Home.js'
import Welcome from './Welcome.js'
import Navigation from './Navigation.js'
import Login from './Login.js'
import Meetings from './Meetings.js'
import Register from './Register.js'

import { Router } from '@reach/router'

import firebase from './Firebase'


class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    const ref = firebase.database().ref('user')
    ref.on('value', snapshot => {
      let FBUser = snapshot.val()
      this.setState({ user: FBUser })
    })
  }

  render() {
    return (
      <div>
        <Navigation user={this.state.user} />
        {this.state.user && <Welcome user={this.state.user} />}

        <Router>
          <Home path="/" user={this.state.user} />
          <Login path="/login" />
          <Meetings path="/meetings" />
          <Register path="/register" />


        </Router>


      </div>
    )
  }

}

export default App;
