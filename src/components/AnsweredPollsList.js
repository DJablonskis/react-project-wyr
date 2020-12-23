import React from 'react'
import AnsweredPoll from './AnsweredPoll'

export default function AnsweredPollsList(props) {
    return (
        <ul className="pollList">
            {props.polls.map(poll => (<li key={poll}><AnsweredPoll poll={poll} /></li>))}
        </ul>
    )
}
