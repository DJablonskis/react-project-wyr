import React, { Component } from 'react'
import { connect } from 'react-redux'
import Score from './Score';

class Leaderboard extends Component {

    render() {
        const { userIDs } = this.props
        return (
            <ul className="leaderboard">
                {userIDs.map((id => (<Score key={id} userID={id} />)))}
            </ul>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        userIDs: Object.keys(users).sort((a, b) => {
            const totalA = users[a].questions.length + Object.keys(users[a].answers).length
            const totalB = users[b].questions.length + Object.keys(users[b].answers).length
            return totalB - totalA
        })
    }
}

export default connect(mapStateToProps)(Leaderboard)
