import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-container">
                <Link to='/'>
                    <span className="login">Login</span>
                </Link>
            </div>

        </div>
    )
}

export default TopBar