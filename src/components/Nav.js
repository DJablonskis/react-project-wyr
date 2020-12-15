import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/Nav.css'

export class Nav extends Component {
    render() {
        const { authedUser } = this.props
        return (
            <nav>
                <ul className="menu">
                    <li>Home</li>
                    <li>Leaderboard</li>
                    <li>New</li>
                </ul>
                <div className="user">
                    {authedUser ? authedUser : "Login"}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = ({ authedUser, users }) => ({ authedUser })

export default connect(mapStateToProps)(Nav)
