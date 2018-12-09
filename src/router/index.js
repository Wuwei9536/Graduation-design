import React, { Component } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router';
import createHashHistory from 'history/createHashHistory';
import App from "../App.js";
import Navigate from '../components/navigate'

export default class PageRouter extends Component {
    render() {
        return (
            <Router history={createHashHistory()}>
                    <Route path='/' component={App} >
                   </Route>
            </Router>
        );
    }
}
