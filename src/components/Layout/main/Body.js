import React, { Component } from 'react'

export class Body extends Component {
    render() {
        const { content } = this.props;
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default Body
