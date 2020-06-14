import React, { Component } from 'react'

export class LoginBody extends Component {
    render() {
        const { content } = this.props;
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default LoginBody
