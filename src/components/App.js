import React, { Component } from 'react'
import '../index.css'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Home from './Home'
import { Nav } from './Nav'
import { connect } from 'react-redux'

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (

      <div className="container">
        <LoadingBar />
        <Nav />
        <Home />
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
