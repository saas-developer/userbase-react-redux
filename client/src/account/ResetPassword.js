import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './account.scss';

export default function ResetPassword(props) {
    const [ username, setUsername ] = useState('');
    const dispatch = useDispatch();

    const forgotPasswordFn = () => {
    }

    return (
        <div className="container">
            <div className="form-container">
                <h2>Reset Password</h2>
                <Form>
                </Form>
                
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                  />

                  <Form.Text className="text-muted">
                    <div>We will send a new password to your email address.</div>
                    <div>Please enter your username(email) below</div>
                  </Form.Text>
                </Form.Group>
                

                <Button
                    variant="primary"
                    type="button"
                    onClick={forgotPasswordFn}
                  >
                    Send Password
                  </Button>
            </div>
        </div>
    );

}
