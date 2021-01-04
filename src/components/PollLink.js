import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PollLink extends Component {
    render() {
        const { poll, optionA, optionB, author } = this.props
        return (
            <Link to={`/questions/${poll}`}>
                <span style={{ display: 'flex', alignItems: 'center' }}><img style={{ borderRadius: '50%', width: '24px', height: '24px', objectFit: 'cover', marginRight: '8px' }} src={author.avatar} alt={author.name} />By {author.name}</span>
                <h3> Would you rather {optionA} or {optionB}?</h3>

            </Link>
        )
    }
}

const mapStateToProps = ({ polls, users }, { poll }) => {
    const p = polls[poll]
    const author = {
        name: users[p.author].name,
        avatar: users[p.author].avatarURL,
    }
    return {
        poll,
        optionA: p.optionOne.text,
        optionB: p.optionTwo.text,
        author
    }
}
export default connect(mapStateToProps)(PollLink)
