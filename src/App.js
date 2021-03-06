import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {length: 0}
    };
  

  handleChange (event) {
    this.setState({
      length: event.target.value.length
    });
  }
  render() {
    return (
      <div className="container" >
        <textarea rows="3" onChange={this.handleChange.bind(this)}></textarea>
        <div className="counter">{this.state.length}</div>
      </div>
    );
  }
}

export default App;
