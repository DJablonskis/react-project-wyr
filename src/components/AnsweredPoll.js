import React, { Component } from 'react'
import { connect } from 'react-redux'

class AnsweredPoll extends Component {
    render() {
        const { poll, author, selection } = this.props

        const totalAnswers = poll.optionOne.votes.length + poll.optionTwo.votes.length * 1.0
        const percentA = Math.round(poll.optionOne.votes.length / (totalAnswers * 1.0) * 100)
        const percentB = 100 - percentA
        console.log(this.props)
        return (
            <div style={{ textAlign: 'center' }}>
                <h3>{author.name} asked would you rather:</h3>
                <p>{this.props.poll.optionOne.text}?</p>
                <p> chosen by {poll.optionOne.votes.length} user(s) {selection === "a" && ("including you")} ({percentA}%)</p>
                <p>Or</p>
                <p>{this.props.poll.optionTwo.text}?</p>
                <p> chosen by {poll.optionTwo.votes.length} user(s) {selection === "b" && ("including you")} ({percentB}%)</p>
            </div>
        )
    }
}

const mapStateToProps = ({ polls, authedUser, users }, { poll }) => {

    const p = polls[poll]
    return {
        poll: p,
        author: users[p.author],
        selection: p.optionOne.votes.includes(authedUser) ? "a" : "b"
    }
}

export default connect(mapStateToProps)(AnsweredPoll)
