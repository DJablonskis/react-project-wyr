import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login'
export default class Nav extends Component {
    render() {
        return (
            <nav>
                <ul className="menu">
                    <li><NavLink to='/' exact activeClassName='active' >Home</NavLink></li>
                    <li><NavLink to='/leaderboard' activeClassName='active' >Leaderboard</NavLink></li>
                    <li><NavLink to='/add' activeClassName='active' >New</NavLink></li>
                </ul>
                <Login />
            </nav>
        )
    }
}
