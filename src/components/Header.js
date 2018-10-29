import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <NavLink exact activeClassName = "active" to="/">Your order please?!</NavLink>
            <NavLink activeClassName = "active" to="/dashboard">Here you are!!</NavLink>
        </header>
    )
};

export default Header
