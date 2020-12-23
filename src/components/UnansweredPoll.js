import React, { Component } from 'react'
import { connect } from 'react-redux'

class UnansweredPoll extends Component {
    render() {
        console.log("listed poll props: ", this.props)
        return (
            <div>
                <h3>{this.props.author} asks would you rather:</h3><p>
                    <button>{this.props.optionA}</button>or<button>{this.props.optionB}</button>?
                </p>

            </div>
        )
    }
}

const mapStateToProps = ({ polls, users }, { poll }) => {
    const p = polls[poll]
    const author = users[p.author].name
    return {
        id: poll,
        optionA: p.optionOne.text,
        optionB: p.optionTwo.text,
        author
    }
}
export default connect(mapStateToProps)(UnansweredPoll)
