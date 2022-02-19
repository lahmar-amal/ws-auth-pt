import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "../Redux/actions/userActions";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
    }, [dispatch]);

    return <div>Hello everyone</div>;
};

export default Home;
