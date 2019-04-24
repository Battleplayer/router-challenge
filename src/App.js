import React from 'react';
import Header from './components/Header';
import MainContainer from './containers/MainContainer';
import {Container, Row} from 'react-bootstrap';
import './App.css';


function App() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Header/>
                </Row>
            </Container>
            <Container>
                <MainContainer/>
            </Container>
        </div>
    );
}

export default App;
