import React, { Component } from 'react'
import './Poll.css'

class Poll extends Component {
    render() {

        return (
            <div>
                <div><span className="name">{user.name}</span> asks:</div>
                <div className="question"><img className="avatar" alt={user.name} /><div><h3>Would you rather... ?</h3></div></div>
            </div>
        )
    }
}
