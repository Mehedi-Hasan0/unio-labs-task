import React, { useState, useContext } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthProvider";
import { toast } from 'react-hot-toast';

const ForgotPassword = () => {
    const { forgotPassword } = useContext(AuthContext);
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;

        forgotPassword(email)
            .then(result => {
                form.reset();
                setError('');
                setMessage('');
                toast.success('Password reset instruction send in email');
                setMessage("Check your inbox for further instructions")
            }).catch(error => {
                setError("Failed to reset password")
                console.log(error);
            })
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name='email' required />
                        </Form.Group>
                        <Button className="w-100 mt-4" type="submit">
                            Reset Password
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Login</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/">Register</Link>
            </div>
        </>
    );
};

export default ForgotPassword;