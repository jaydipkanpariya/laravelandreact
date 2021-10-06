
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Home from './Home';
import Repo from './Repo';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            
            <hr />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/repo" component={Repo} />
             
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

ReactDOM.render( <App /> , document.getElementById('root'));