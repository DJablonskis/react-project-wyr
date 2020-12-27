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
        console.log("Home props: ", this.props)
        return (
            <div className="home">
                <button className={this.state.polls ? "active" : undefined} onClick={() => this.changePage(true)}>New polls</button>
                <button className={!this.state.polls ? "active" : undefined} onClick={() => this.changePage(false)}>Polls history</button>
                <div>
                    <PollsList polls={polls ? unanswered : answered} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, users, polls }) => {
    const answered = Object.keys(users[authedUser].answers);
    const unanswered = Object.keys(polls).filter((poll) => (!answered.includes(poll)))
    return { answered, unanswered }
}

export default connect(mapStateToProps)(Home)
