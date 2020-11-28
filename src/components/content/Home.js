import React, { useState, useEffect } from 'react';
import UserService from "../../services/user.service";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

const Home = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.reponse && error.response.data) ||
                    error.message ||
                    error.toString();
                setContent(_content);
            }
        );
    }, []);

    const { user: currentUser } = useSelector((state) => state.auth);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <div className="home dave">
            <header className="">
                <h3>{content}</h3>
            </header>
        </div>
    );
};

export default Home;