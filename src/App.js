import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

ReactDOM.render (class App extends Component {
  constructor() {
    super();
    this.state = { repoNames: [] };
  }

  componentDidMount() {
    let self = this;
    fetch("https://api.github.com/repositories", {method: 'get'})
      .then((response) => { return response.json(); })
      .then((repos) => {
        self.setState({ repoNames: repos.map((r) => { return r.name; })});
      });
  }

  render() {
    return (
      <ol>
        {this.state.repoNames.map((r, i) => { return <li key={i}>{r}</li> })}
      </ol>
    )
  }
})

export default App;
