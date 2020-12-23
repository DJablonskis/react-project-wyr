import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AiOutlinePoweroff } from 'react-icons/ai'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

    state = {
        selected: null
    }

    handleSelect = (key) => {
        this.props.dispatch(setAuthedUser(key.target.value))
    }
    render() {
        const { authedUser } = this.props


        return (
            <div>
                { authedUser !== null && (
                    <div className="user">
                        <span className="login"><img src={this.props.avatar} alt={this.props.name} />{this.props.name}</span>
                        <AiOutlinePoweroff onClick={() => { this.props.dispatch(setAuthedUser(null)) }} />
                    </div>
                )}
                { authedUser === null && (
                    <div className="user">
                        <select onChange={this.handleSelect} >
                            <option key='blank' value="key">Please select a user</option>

                            {this.props.userArray.map((key) => (
                                <option key={key} value={key}>{this.props.users[key].name}</option>
                            ))}
                        </select>
                    </div>)}
            </div >
        )
    }
}

const mapStateToProps = ({ authedUser, users }) => {
    if (authedUser !== null) {
        return { authedUser, name: users[authedUser].name, avatar: users[authedUser].avatarURL }
    }
    else return { authedUser, userArray: Object.keys(users), users }
}
export default connect(mapStateToProps)(Login)
