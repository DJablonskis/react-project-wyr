import React, { Component } from 'react'
import { connect } from 'react-redux'

class Score extends Component {
    render() {
        const { name, answers, questions, avatar } = this.props
        console.log("Score props: ", this.props)

        return (
            <li className="score">
                <div><img src={avatar} alt={name} /></div>
                <div>
                    <h3>{name}, Score: {questions + answers}</h3>
                    <p>Answers: {answers}, Questions: {questions}</p>
                </div>

            </li>
        )
    }
}

const mapStateToProps = ({ users }, { userID }) => {
    const user = users[userID]
    return {
        name: user.name,
        avatar: user.avatarURL,
        answers: Object.keys(user.answers).length,
        questions: user.questions.length
    }
}

export default connect(mapStateToProps)(Score)
