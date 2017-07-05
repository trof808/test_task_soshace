import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from "react-bootstrap";
import { Provider } from 'react-redux'
import { store } from '../store';

import Header from './Header';
import Main from './Main';

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header />
                    <Grid>
                        <Row>
                            <Col md={4} sm={4}>
                                <Main />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </Provider>
            
            
        )
    }
}

export default Root;