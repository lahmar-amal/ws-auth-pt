import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { register } from "../Redux/actions/userActions";

const Register = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    const handleChange = (e) => {
        //error syntaxe: [e.target.name]:[ e.target.value]
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(register(user));
        console.log("ok");
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
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        value={user.name}
                        placeholder="Enter email"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        name="phone"
                        type="text"
                        value={user.phone}
                        placeholder="Enter email"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    onClick={handleRegister}
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;
