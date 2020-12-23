import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredPollsList from './AnsweredPollsList'
import NewPollsList from './NewPollsList'

class Home extends Component {
    state = {
        polls: true
    }

    changePage = (page) => {
        if (page !== this.state.polls)
            this.setState({ polls: !this.state.polls })
    }

    render() {
        const { polls } = this.state
        console.log("Home props: ", this.props)
        return (
            <div className="home">
                <button className={this.state.polls && ("active")} onClick={() => this.changePage(true)}>New polls</button>
                <button className={!this.state.polls && ("active")} onClick={() => this.changePage(false)}>Polls history</button>
                <div>
                    {
                        polls
                            ? <NewPollsList polls={this.props.questions} />
                            : <AnsweredPollsList polls={this.props.answers} />
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, users, polls }) => {
    const answers = Object.keys(users[authedUser].answers);
    const questions = Object.keys(polls).filter((poll) => (!answers.includes(poll)))
    return { answers, questions, authedUser }
}

export default connect(mapStateToProps)(Home)
