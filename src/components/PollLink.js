import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PollLink extends Component {
    render() {
        const { poll, optionA, optionB, author } = this.props
        return (
            <Link to={`/poll/${poll}`}>
                <h3> Would you rather {optionA} or {optionB}?</h3>
                <h4>By {author}</h4>
            </Link>
        )
    }
}

const mapStateToProps = ({ polls, users }, { poll }) => {
    const p = polls[poll]
    const author = users[p.author].name
    return {
        poll,
        optionA: p.optionOne.text,
        optionB: p.optionTwo.text,
        author
    }
}
export default connect(mapStateToProps)(PollLink)
