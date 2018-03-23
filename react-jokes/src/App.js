import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegisterUser from './components/RegisterUser'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Route path="/login" component={Login} />
          <Route path="/users" component={Auth?(Users)} />
          <Route path="/logout" component={Logout} /> */}
          <Route path="/register" component={RegisterUser} />
        </div>
      </Router>
    );
  }
}

export default App;
