import React from 'react'
import PollLink from './PollLink'

export default function PollsList(props) {
    console.log("Props: ", props)
    return (
        <ul className="pollList">
            {props.polls.map(poll => (<li key={poll}><PollLink poll={poll} /></li>))}
        </ul>
    )
}
