import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = { message: "" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        message: "Hello World!, after 15 seconds"
      })
    }, 15000);
  }

  render() {
    return (
      <div>
        <h1>{ this.state.message }</h1>
      </div>
    )
  }
}
export default App;

