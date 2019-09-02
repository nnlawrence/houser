import React, { Component } from 'react'

export default class House extends Component {
    render(props) {
        return (
            <div>
                <button onClick={this.props.delete(props.id)}>Delete</button>
                <p>Property Name:</p>
                <p>Address:</p>
                <p>City:</p>
                <p>State:</p>
                <p>Zip:</p>
            </div>
        )
    }
}
