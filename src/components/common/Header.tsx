import * as React from 'react';
import {NavLink} from 'react-router-dom'

export const Header = () => (
    <nav>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        {" | "}
        <NavLink to="/about" activeClassName="active">About</NavLink>
    </nav>
);