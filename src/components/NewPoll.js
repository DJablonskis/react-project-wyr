import React, { Component } from 'react'
import { connect } from 'react-redux'

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
        const { author, poll } = this.props
        return (
            <div className="poll-selection">
                <h3>{author.name} asks would you rather:</h3>
                <button className={this.state.selected === "a" ? "selected" : undefined} type="button" onClick={() => { this.handleSelect("a") }}>{poll.optionOne.text}</button>
                <span> or </span>
                <button className={this.state.selected === "b" ? "selected" : undefined} type="button" onClick={() => { this.handleSelect("b") }}>{poll.optionTwo.text}</button>
            </div >
        )
    }
}

const mapStateToProps = ({ polls, users }, { poll }) => {

    const p = polls[poll]
    return {
        poll: p,
        author: users[p.author],
    }
}

export default connect(mapStateToProps)(NewPoll)
