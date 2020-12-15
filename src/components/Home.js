import React, { Component } from 'react'
import { connect } from 'react-redux'

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
        return (
            <div>
                <button onClick={() => this.changePage(true)}>New polls</button>
                <button onClick={() => this.changePage(false)}>Polls history</button>
                { polls ? "New polls" : "Old polls"}

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(Home)
