import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import Home from './Home.js'
import Welcome from './Welcome.js'
import Navigation from './Navigation.js'

import { Router } from '@reach/router'


class App extends Component {

  constructor() {
    super();
    this.state = {
      user: 'Ray'
    }
  }

  render() {
    return (
      <div>
        <Navigation user={this.state.user} />
        {this.state.user && <Welcome user={this.state.user} />}

        <Router>
          <Home path="/" user={this.state.user} />
        </Router>


      </div>
    )
  }

}

export default App;
