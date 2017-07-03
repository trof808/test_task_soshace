import React, { Component, PropTypes } from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col, ButtonToolbar, Button } from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        My-app
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <ButtonToolbar>
                        <Button style={styles.buttons} bsStyle="primary">Добавить товар</Button>
                        <Button style={styles.buttons} bsStyle="primary">Добавить категорию</Button>
                    </ButtonToolbar>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const styles = {
    buttons: {
        marginTop: '10px'
    }
}

export default Header;