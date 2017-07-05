import React, { Component, PropTypes } from 'react';
import { Modal, Button, FormGroup, ControlLabel, option, FormControl, Col, Row, FieldGroup } from "react-bootstrap";


import AddItemForm from './AddItemForm';


class ModalWindow extends Component {

    render() {
        if (this.props.target == 'item') {
            var ModalTitle = <Modal.Title>Добавить товар</Modal.Title>
            var ModalContent = ( 
                <AddItemForm />
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