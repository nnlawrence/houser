import React, { Component } from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import axios from 'axios';

export default class Wizard extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    componentDidMount(){
        this.setState({name: this.props.name})
        this.setState({address: this.props.address})
        this.setState({city: this.props.city})
        this.setState({state: this.props.state})
        this.setState({zip: this.props.zip})
    }

    handleName = (val) => {
        this.setState({name: val})
    }

    handleAddress = (val) => {
        this.setState({address: val})
    }

    handleCity = (val) => {
        this.setState({city: val})
    }

    handleState = (val) => {
        this.setState({state: val})
    }

    handleZip = (val) => {
        this.setState({zip: val})
    }

    handleComplete = (e) => {
        const userdata = this.state;
        axios.post(`http://localhost:4000/api/houses/${JSON.stringify(userdata)}`)
        .then(res => {
            this.setState({houses: res.data})
        })
    }

    render() {
 
        return (
            <div>
                <p>Property Name</p>
                <input onChange = {(e) => this.handleName(e.target.value)}
                       value = {this.state.name}/>
                <p>Address</p>
                <input onChange = {(e) => this.handleAddress(e.target.value)}
                       value = {this.state.address}/>
                <p>City</p>
                <input onChange = {(e) => this.handleCity(e.target.value)}
                       value = {this.state.city}/>
                <p>State</p>
                <input onChange = {(e) => this.handleState(e.target.value)}
                       value = {this.state.state}/>
                <p>Zip</p>
                <input onChange = {(e) => this.handleZip(e.target.value)}
                       value = {this.state.zip}/>
                <Link to = '/' ><button>Cancel</button></Link>
                <button onClick={() => this.handleComplete()}>Complete</button>
            </div>
        )
    }
}
