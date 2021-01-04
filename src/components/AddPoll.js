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
                <h2>Create new question:</h2>
                <span style={style.big}>Would you rather </span>
                <input style={style.input} name='optionOneText' placeholder="Option one" onChange={this.handleInputChange} value={this.state.optionOneText} type="text" />
                <span style={style.big}>or</span>
                <input style={style.input} name='optionTwoText' placeholder="Option two" onChange={this.handleInputChange} value={this.state.optionTwoText} type="text" />
                <span style={style.big}> ?</span>
                <br />
                <button disabled={this.state.optionOneText === "" || this.state.optionTwoText === ""} onClick={this.handleSubmit}>Submit question</button>
            </div>
        )
    }
}

const style = {
    big: {
        fontWeight: '800'
    },
    input: {
        fontSize: '18px',
        fontFamily: 'Josefin Sans, cursive',
        fontWeight: '800',
        margin: '4px 10px',
        padding: '6px',
        border: 'none',
        borderBottom: '2px solid black'
    }

}

const mapStateToProps = ({ authedUser }) => ({
    author: authedUser
})

export default connect(mapStateToProps)(AddPoll)
