import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerPoll } from '../actions/shared'


class NewPoll extends Component {

    state = {
        selected: null
    }

    handleSelect = (selection) => {
        if (this.state.selected !== selection) {
            this.setState({ selected: selection })
        }
    }

    render() {
        const { author, poll, dispatch, authedUser } = this.props
        return (
            <div className="poll-selection">
                <h3>{author.name} asks would you rather:</h3>
                <button className={this.state.selected === "optionOne" ? "selected" : undefined} type="button" onClick={() => { this.handleSelect("optionOne") }}>{poll.optionOne.text}</button>
                <span> or </span>
                <button className={this.state.selected === "optionTwo" ? "selected" : undefined} type="button" onClick={() => { this.handleSelect("optionTwo") }}>{poll.optionTwo.text}</button>
                <br />
                <button disabled={this.state.selected === null} onClick={() => { dispatch(handleAnswerPoll({ authedUser, qid: poll.id, answer: this.state.selected })) }}>Submit selection</button>
            </div >
        )
    }
}

const mapStateToProps = ({ polls, users, authedUser }, { poll }) => {
    const p = polls[poll]
    return {
        poll: p,
        author: users[p.author],
        authedUser
    }
}

export default connect(mapStateToProps)(NewPoll)
