import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredPoll from './AnsweredPoll'
import NewPoll from './NewPoll'

class IndividualPoll extends Component {
    render() {
        const { id, answered } = this.props
        return (
            <div>
                {answered
                    ? <AnsweredPoll poll={id} />
                    : <NewPoll poll={id} />
                }
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, users }, options) => {
    const id = options.match.params.id
    const answered = Object.keys(users[authedUser].answers).includes(id);
    return { answered, id }
}
export default connect(mapStateToProps)(IndividualPoll)
