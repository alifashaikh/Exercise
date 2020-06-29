import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

class Dashboard extends Component {
    state = {
        posts: []
    }

    componentDidMount(){
        const response = axios.post(
            'https://hoblist.com/movies',
            {
                category: 'movies',
                language: 'kannada',
                genre: 'all',
                sort: 'voting'
            },
            { headers: { 'Content-Type': 'application/json' } })
    
        console.log(response.data)
    }
    render() {
        return (
            <div >
               <Navbar />
            </div>
        )
    }
}

export default Dashboard