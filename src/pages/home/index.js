import React from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter, Link, Switch } from "react-router-dom"

class Home extends React.Component {

    render() {
        return (
            <ul>
                <li><Link to="/marquee">跑马灯</Link></li>
                <li><Link to="/carousel">轮播图</Link></li>
                <li><Link to="/toolTip">ToolTip提示组件</Link></li>
            </ul>
        );
    }
}

export default Home;