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

        this.addItemModal = this.addItemModal.bind(this);
        this.addCategoryModal = this.addCategoryModal.bind(this);
        this.close = this.close.bind(this);
    }

    addItemModal() {
        this.setState({ 
            show: true,
            target: 'item' 
        })
    }

    addCategoryModal() {
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
                        <Button style={styles.buttons} bsStyle="primary" onClick={this.addItemModal}>Добавить товар</Button>
                        <Button style={styles.buttons} bsStyle="primary" onClick={this.addCategoryModal}>Добавить категорию</Button>
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