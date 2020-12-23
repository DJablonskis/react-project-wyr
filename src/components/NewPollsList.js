import React from 'react'
import UnansweredPoll from './UnansweredPoll'

export default function NewPollsList(props) {
    return (
        <ul className="pollList">
            {props.polls.map(poll => (<li key={poll}><UnansweredPoll poll={poll} /></li>))}
        </ul>
    )
}
