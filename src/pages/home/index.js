import React from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter, Link, Switch } from "react-router-dom"
import './home.css';

class Home extends React.Component {

    render() {
        return (
            <ul>
                <li><Link to="/marquee">跑马灯</Link></li>
            </ul>
        );
    }
}

export default Home;