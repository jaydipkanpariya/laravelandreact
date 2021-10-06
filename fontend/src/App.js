import React, { Component } from 'react';
import Home from './Home';
import Repo from './Repo';
class App extends Component {

  constructor() {
    super();
    this.state = {
      name: null,
    };
    this.getCommit = this.getCommit.bind(this);
  }
  getCommit(values) {
    this.setState({ name: values });
    alert(this.state.name);
  }

  render() {
    return (
      <div>
          {(() => {
            
            switch (this.setState) {
              case 'abc':
                  return (
                    <div>You are a Admin.</div>
                  )
              case 'Manager':
                  return (
                    <div>You are a Manager.</div>
                  )
              default:
                  return (
                    <Home getCommit={this.getCommit}/>
                  )
            }

          })()}

      
        
      </div>
    );
  }
}

export default App;