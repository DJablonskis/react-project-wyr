import React, { Component } from 'react'
import { connect } from 'react-redux'

const style = {
    option: {
        color: 'white',
        margin: 'auto',
        padding: '8px'
    },
    container: {
        textAlign: 'center', maxWidth: '648px', margin: 'auto', padding: '16px 48px'
    },
    box: { border: '2px solid black', position: 'relative' },
    info: {
        fontSize: '14px',
    },
    choice: {
        borderRadius: '50%',
        color: 'black',
        fontSize: '12px',
        fontWeight: '700',
        display: 'flex',
        position: 'absolute',
        width: '48px',
        height: '48px',
        right: '-24px',
        top: '-24px',
        backgroundColor: 'gold',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bar: {
        height: '16px',
        backgroundColor: 'blue',
        width: '100%',
        margin: 'auto',
        marginTop: '16px',
        borderRadius: '6px',
        overflow: 'hidden',
        border: '1px solid black'
    },
    fill: {
        height: '16px',
        backgroundColor: 'red',
        overflow: 'hidden'
    },
    avatar: { margin: '8px', width: '20px', height: '20px', objectFit: 'contain', borderRadius: '50%' }
}

class AnsweredPoll extends Component {
    render() {
        const { poll, author, selection } = this.props

        const totalAnswers = poll.optionOne.votes.length + poll.optionTwo.votes.length * 1.0
        const percentA = Math.round(poll.optionOne.votes.length / (totalAnswers * 1.0) * 100)
        const percentB = 100 - percentA
        return (
            <div style={style.container}>
                <p style={{ display: 'flex', alignItems: 'center' }}>Question by:<img style={style.avatar} src={author.avatar} alt={author.name} />{author.name}</p>
                <h3>Would you rather:</h3>
                <div style={style.box}>
                    <p style={{ ...style.option, backgroundColor: 'red' }}>{this.props.poll.optionOne.text}? ({percentA}%)</p>
                    <span style={style.info}> chosen by {poll.optionOne.votes.length} user(s) </span>
                    {selection === "a" && <span style={style.choice}>Your choice</span>}
                </div>
                <p>Or</p>
                <div style={style.box}>
                    <p style={{ ...style.option, backgroundColor: 'blue' }}>{this.props.poll.optionTwo.text}? ({percentB}%)</p>
                    <span style={style.info}> chosen by {poll.optionTwo.votes.length} user(s) </span>
                    {selection === "b" && <span style={style.choice}>Your choice</span>}
                </div>
                <div style={style.bar}>
                    <div style={{ ...style.fill, width: `${percentA}%` }}></div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = ({ polls, authedUser, users }, { poll }) => {
    const p = polls[poll]
    return {
        poll: p,
        author: {
            name: users[p.author].name,
            avatar: users[p.author].avatarURL
        },
        selection: p.optionOne.votes.includes(authedUser) ? "a" : "b"
    }
}

export default connect(mapStateToProps)(AnsweredPoll)
