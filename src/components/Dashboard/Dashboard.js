import React, { Component } from 'react'
import House from '../House/House';
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }

    componentDidMount = () => {
        return this.getHouses()
    }

    getHouses = () => {
        axios.get('/api/houses')
        .then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    handleDelete = (id) => {
        axios.delete(`/api/house/${id}`)
        .then(res => {
            this.setState({houses: res.data})
        })
        
    }


    render() {

        const mappedHouses = this.state.houses.map ((hous) => {
            return (
                <House key = {hous.index} houses = {hous} id = {hous.id} delete = {hous.handleDelete} />
            )
        })

        return (
            <div>
                
                <Link to = '/wizard' ><button>Add New Property</button></Link>

                {mappedHouses}

            </div>
        )
    }
}
