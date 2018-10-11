import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import logo from '../logo.svg'
import './App.css'
import Gpu from '../components/Gpu'

class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    setInterval(() => dispatch(actions.requestUsages()) , 5000)
  }

  render() {
    const servers = this.props.servers
    const server_names = this.props.server_names
    return (
      <div className="App">
        {server_names.map(server_name => 
          <div>
            {servers[server_name].map(gpu => {
              return (<Gpu gpu={gpu}/>)
            })}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    server_names: state.usages.get('server_names'),
    servers: state.usages.get('server_data')
  }
}

export default connect(mapStateToProps)(App)
