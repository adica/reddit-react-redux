import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

export default function Nav() {
    return (
        <nav className="navigation">
            <NavLink exact to="/">reg</NavLink>
            <NavLink exact to="/links">Links</NavLink>
        </nav>
    );
}
