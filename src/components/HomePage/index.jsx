import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                Demo
                <br />
                <Link to="/demo">Rent</Link>
            </React.Fragment>
        )
    }
}