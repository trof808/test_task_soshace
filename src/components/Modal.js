import React, { Component, PropTypes } from 'react';
import { Modal, Button, FormGroup, ControlLabel, option, FormControl, Col, Row, FieldGroup } from "react-bootstrap";
import { getCategories } from '../services/getCategories';

class ModalWindow extends Component {

    constructor() {
        super();

        this.state = {
            categories: []
        }

        this.addItem = this.addItem.bind(this);
    }

    componentDidMount() {
        getCategories().then(res => console.log(res)).catch(error => console.log(error))
    }

    addItem() {
        this.props.close();
    }

    render() {
        if (this.props.target == 'item') {
            var ModalTitle = <Modal.Title>Добавить товар</Modal.Title>
            var ModalContent = ( 
                <div>
                    <FormGroup>
                        <ControlLabel>Категория</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            {this.state.categories.map((category) => (
                                <option value={category._id}>{category.title}</option>
                            ))}
                            
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Название товара</ControlLabel>
                        <FormControl
                            id="inputName"
                            type="text"
                            placeholder="Название товара"
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Закупочная стоимость</ControlLabel>
                        <FormControl
                            id="inputPurchase"
                            type="text"
                            placeholder="Закупочная стоимость"
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Розничная цена</ControlLabel>
                        <FormControl
                            id="inputSelling"
                            type="text"
                            placeholder="Розничная цена"
                        />
                    </FormGroup>
                    
                </div>
            )
        } else {
            var ModalTitle = <Modal.Title>Добавить категорию</Modal.Title>
            var ModalContent = ( 
                
                <div>
                    <FormGroup>
                        <ControlLabel>Название категории</ControlLabel>
                        <FormControl
                            id="categoryName"
                            type="text"
                            placeholder="Название категории"
                        />
                    </FormGroup>
                </div>
            )
        }
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        {ModalTitle}
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md={6} mdOffset={3}>
                                {ModalContent}
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.close}>Закрыть</Button>
                        <Button bsStyle="primary" onClick={this.addItem}>Добавить</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ModalWindow;