import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../Redux/actions/userActions";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [user, setUser] = useState({});
    const history = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(user, history));
    };
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        value={user.email}
                        placeholder="Enter email"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        type="password"
                        value={user.password}
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleLogin}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;
