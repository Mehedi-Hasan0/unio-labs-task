import React, { useState, useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from 'react-hot-toast';

const Login = () => {
    const { login, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log('currentUser', user);
                form.reset();
                setError('');
                toast.success('Successfully logged in');
            }).catch(error => {
                console.error(error);
                setError(error.message);
            }).finally(() => {
                setLoading(false);
            })

    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error.slice(22, -2)}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" required />
                        </Form.Group>
                        <Button className="w-100 mt-4" type="submit">
                            Log In
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgotPassword">Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/">Register</Link>
            </div>
        </>
    );
};

export default Login;