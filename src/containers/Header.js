import React, { Component, PropTypes } from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col, ButtonToolbar, Button } from "react-bootstrap";
import ModalWindow from '../components/Modal';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            show: false,
            target: ''
        }

        this.addItem = this.addItem.bind(this);
        this.addCategory = this.addCategory.bind(this);
        this.close = this.close.bind(this);
    }

    addItem() {
        this.setState({ 
            show: true,
            target: 'item' 
        })
    }

    addCategory() {
        this.setState({ 
            show: true,
            target: 'category' 
        })
    }

    close() {
        this.setState({ show: false })
    }

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
                        <Button style={styles.buttons} bsStyle="primary" onClick={this.addItem}>Добавить товар</Button>
                        <Button style={styles.buttons} bsStyle="primary" onClick={this.addCategory}>Добавить категорию</Button>
                    </ButtonToolbar>
                </Navbar.Collapse>
                <ModalWindow show={this.state.show} close={this.close} target={this.state.target}/>
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