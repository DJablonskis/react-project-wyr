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
            <div>

                <h3>{author.name} asked would you rather:</h3>
                <p>{this.props.poll.optionOne.text}? (chosen by {percentA}%){selection === "a" && (<span>*</span>)}</p>
                <p>{this.props.poll.optionTwo.text}? (chosen by {percentB}%){selection === "b" && (<span>*</span>)}</p>
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
