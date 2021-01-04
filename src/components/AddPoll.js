import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPoll } from '../actions/shared'
import { Redirect } from 'react-router-dom'


class AddPoll extends Component {
    state = {
        optionOneText: "",
        optionTwoText: "",
        toHome: false
    }
    handleInputChange = (event) => {
        this.setState((state) => ({ ...state, [event.target.name]: event.target.value }))
    }
    handleSubmit = () => {
        const { author, dispatch } = this.props
        const { optionOneText, optionTwoText } = this.state
        dispatch(handleAddPoll({ author, optionOneText, optionTwoText }))
        this.setState({ toHome: true })
    }

    render() {
        if (this.state.toHome === true) {
            return <Redirect to='/' />
        }
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
