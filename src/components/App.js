import React, { Component } from 'react'
import '../styles/style.css'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Home from './Home'
import Nav from './Nav'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Leaderboard from './Leaderboard'
import IndividualPoll from './IndividualPoll'
import AddPoll from './AddPoll'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router >
        <LoadingBar />
        <div className="container">
          <Nav />
          {this.props.authedUser === null ? <h2>LOADING</h2>
            : <div>
              <Route path='/' exact component={Home} />
              <Route exact path='/questions/:id' component={IndividualPoll} />
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/add' component={AddPoll} />
            </div>
          }
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
