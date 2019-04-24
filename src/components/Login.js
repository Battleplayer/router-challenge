import React, {Component} from 'react';
import {Button, Form, Alert} from 'react-bootstrap';

class Login extends Component {
    state = {
        userName: '',
        userPassword: '',
        error: false
    };

    onInputHandler = e => this.setState({[e.target.name]: e.target.value});

    formSubmit = e => {
        e.preventDefault();
        const {userName, userPassword} = this.state;
        if (userName.toString() === 'Admin' && userPassword.toString() === '12345') {
            this.props.logIn()
        } else {
            this.setState({error: true});
            setTimeout(() => {
                this.setState({error: false})
            }, 2000)
        }
    };

    render() {
        const {userName, userPassword, error} = this.state;
        return (
            <>
                {error ? <Alert variant='danger'>
                        Invalid login or password
                    </Alert>
                    : null}
                <Form className='loginForm' onSubmit={this.formSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Login</Form.Label>
                        <Form.Control name="userName"
                                      value={userName}
                                      type="text"
                                      onChange={this.onInputHandler}
                                      placeholder="Enter login"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="userPassword"
                                      value={userPassword}
                                      type="password"
                                      onChange={this.onInputHandler} placeholder="Password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        )
    }
}

export default Login;
