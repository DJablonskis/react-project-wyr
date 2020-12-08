import React, { Component } from 'react'
import Poll from './Poll'
import '../index.css'

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Poll />
      </div>
    )
  }
}
export default App
