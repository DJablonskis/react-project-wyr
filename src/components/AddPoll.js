import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPoll } from '../actions/polls'


class AddPoll extends Component {
    state = {
        optionOneText: "",
        optionTwoText: ""
    }
    handleInputChange = (event) => {
        this.setState((state) => ({ ...state, [event.target.name]: event.target.value }))
    }
    handleSubmit = () => {
        const { author, dispatch } = this.props
        const { optionOneText, optionTwoText } = this.state
        dispatch(handleAddPoll({ author, optionOneText, optionTwoText }))
    }

    render() {
        const { authedUser, dispatch } = this.props
        return (
            <div>
                <h2>Creating a new poll</h2>
                <span>Would you rather </span>
                <input name='optionOneText' placeholder="Option one" onChange={this.handleInputChange} value={this.state.optionOneText} type="text" />
                <span> or </span>
                <input name='optionTwoText' placeholder="Option two" onChange={this.handleInputChange} value={this.state.optionTwoText} type="text" />
                <span> ?</span>
                <br />
                <button disabled={this.state.optionOneText === "" || this.state.optionTwoText === ""} onClick={this.handleSubmit}>Submit question</button>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser }) => ({
    author: authedUser
})

export default connect(mapStateToProps)(AddPoll)
