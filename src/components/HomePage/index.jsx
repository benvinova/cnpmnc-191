import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../shared/NavBar';

export default class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <p className="text-danger">Demo</p>
                <Link to="/demo">Rent</Link>
            </React.Fragment>
        )
    }
}