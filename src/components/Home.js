import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollsList from './PollsList'

class Home extends Component {
    state = {
        polls: true
    }

    changePage = (page) => {
        if (page !== this.state.polls)
            this.setState({ polls: !this.state.polls })
    }

    render() {
        const { polls } = this.state
        const { answered, unanswered } = this.props
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <button className={this.state.polls ? "active" : undefined} onClick={() => this.changePage(true)}>New questions</button>
                    <button className={!this.state.polls ? "active" : undefined} onClick={() => this.changePage(false)}>Answered questions</button>
                </div>

                <div>
                    <PollsList polls={polls ? unanswered : answered} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, users, polls }) => {

    const answered = Object.keys(users[authedUser].answers).sort((a, b) => {
        return polls[b].timestamp - polls[a].timestamp
    });
    const unanswered = Object.keys(polls).filter((poll) => (!answered.includes(poll))).sort((a, b) => {
        return polls[b].timestamp - polls[a].timestamp
    });
    return { answered, unanswered }
}

export default connect(mapStateToProps)(Home)
