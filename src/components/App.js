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
import Login from '../components/Login'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { authedUser, loading } = this.props
    const opacity = loading ? 0 : 1
    return (
      <Router >
        <LoadingBar />
        <div className="container">
          {
            authedUser === null
              ?
              <div style={{ opacity: opacity, transition: "opacity 2s linear" }}>
                <h2>Please log in</h2>
                <Login /></div>
              : <div>
                <Nav />
                <Route path='/' exact component={Home} />
                <Route exact path='/questions/:id' component={IndividualPoll} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/add' component={AddPoll} />
              </div>

          }
        </div>
      </Router >
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    loading: Object.keys(users).length === 0
  }
}

export default connect(mapStateToProps)(App)
