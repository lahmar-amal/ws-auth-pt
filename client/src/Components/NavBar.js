import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Redux/actions/userActions";

const NavBar = () => {
    const isAuth = useSelector((state) => state.UserReducer.isAuth);
    const dispatch = useDispatch();
    return (
        <div>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                {isAuth ? (
                    <>
                        <Link to="/profile">
                            <li>Profile</li>
                        </Link>

                        <Link to="/logout">
                            <li onClick={() => dispatch(logout())}> Logout</li>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/register">
                            <li>Register</li>
                        </Link>

                        <Link to="/login">
                            <li>Login</li>
                        </Link>
                    </>
                )}
            </ul>{" "}
        </div>
    );
};

export default NavBar;
