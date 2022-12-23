import React, { useContext } from 'react';
import { useState } from "react";
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-hot-toast'

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                toast.success('Registration completed!')
            }).catch(error => {
                console.log(error);
                setError(error.message)
            })
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Register</h2>
                    {error && <Alert variant='danger'>{error.slice(9, -22)}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' required />
                        </Form.Group>
                        <Form.Group id="phone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" name='phone' required />
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name='email' required />
                        </Form.Group>
                        <Form.Group id="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" name='address' required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' required />
                        </Form.Group>
                        <Button className="w-100 mt-4" type="submit">
                            Register
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    );
};

export default SignUp;