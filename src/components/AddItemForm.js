import React, { Component, PropTypes } from 'react';
import { FormGroup, ControlLabel, option, FormControl } from "react-bootstrap";


class AddItemForm extends Component {


    render() {
        return (
            <div>
                    <FormGroup>
                        <ControlLabel>Категория</ControlLabel>
                        <FormControl inputRef={ref => { this.itemCat = ref; }} componentClass="select" placeholder="select">
                            {/*{this.props.categ.map((category) => (
                                <option key={category._id} value={category.title}>{category.title}</option>
                            ))}*/}
                            
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
    }
}


export default AddItemForm;