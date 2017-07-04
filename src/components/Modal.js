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
        fetch('http://localhost:3001/api/category')
            .then(res => res.json())
            .then(data => this.setState({ categories: data }))
            .catch(error => console.log(error))
    }

    addItem() {
        if(this.props.target == 'category') {
            fetch('http://localhost:3001/api/add/category', 
            { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: this.inputCat.value
                })
            })
        } else {
            fetch('http://localhost:3001/api/add/item', 
            { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: this.itemName.value,
                    purchase_pice: this.itemPurchase.value,
                    category: this.itemCat.value,
                    selling_price: this.itemSelling.value
                })
            })
        }
        this.props.close();
    }

    render() {
        if (this.props.target == 'item') {
            var ModalTitle = <Modal.Title>Добавить товар</Modal.Title>
            var ModalContent = ( 
                <div>
                    <FormGroup>
                        <ControlLabel>Категория</ControlLabel>
                        <FormControl inputRef={ref => { this.itemCat = ref; }} componentClass="select" placeholder="select">
                            {this.state.categories.map((category) => (
                                <option key={category._id} value={category.title}>{category.title}</option>
                            ))}
                            
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Название товара</ControlLabel>
                        <FormControl
                            inputRef={ref => { this.itemName = ref; }}
                            id="inputName"
                            type="text"
                            placeholder="Название товара"
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Закупочная стоимость</ControlLabel>
                        <FormControl
                            inputRef={ref => { this.itemPurchase = ref; }}
                            id="inputPurchase"
                            type="text"
                            placeholder="Закупочная стоимость"
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Розничная цена</ControlLabel>
                        <FormControl
                            inputRef={ref => { this.itemSelling = ref; }}
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
                            inputRef={ref => { this.inputCat = ref; }}
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