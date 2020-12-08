import React, { Component } from 'react'
import Poll from './Poll'
import '../index.css'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="container">
        <Poll />
      </div>
    )
  }
}
export default connect()(App)
