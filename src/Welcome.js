import React, { Component } from 'react'

class Welcome extends Component {


    constructor() {
        super()
    }

    render() {
        const { user } = this.props

        return (
            <div className="text-right pr-3 pt-2">
                <span className="text-secondary font-weight-bold pl-1">
                    {user}
                </span>
                <a href="/" className="font-weight-bold text-primary pl-1">Logout</a>
            </div>

        )
    }

}

export default Welcome;