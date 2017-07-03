import React, { Component, PropTypes } from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

import Header from './Header';

class Root extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

export default Root;