import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'
import logo from '../logo.svg';
import './App.css';
import Gpu from '../components/Gpu'

class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    setInterval(() => dispatch(actions.requestUsages()) , 1000)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {this.props.servers.map(server => 
            {server.map(gpu => (
              <Gpu gpu={gpu}/>
            ))}
          )}
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    server_names: state.get('server_names'),
    servers: state.get('server_data')
  }
}

export default App;
