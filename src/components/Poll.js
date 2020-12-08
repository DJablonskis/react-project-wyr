import React, { Component } from 'react'
import './Poll.css'

export default class Poll extends Component {
    render() {

        const user = { name: "Billy elliot" }
        return (
            <div>
                <div><span className="name">{user.name}</span> asks:</div>
                <div className="question"><img className="avatar" alt={user.name} /><div><h3>Would you rather... ?</h3></div></div>
            </div>
        )
    }
}
