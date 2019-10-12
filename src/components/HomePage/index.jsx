import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../shared/NavBar';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Dung Trinh"
        }
    }

    demo(value) {
        this.setState({
            name: value
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <p className="text-danger">{this.state.name}</p>
                <button onClick={() => this.demo("CNPMNC")}>Demo</button>
                <Link to="/demo">Rent</Link>
            </React.Fragment>
        )
    }
}