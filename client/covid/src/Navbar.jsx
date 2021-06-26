import React from 'react';
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
            <NavLink exact className="navbar-brand" to="/">COVID-19</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink activeClassName="menu_active" exact className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="menu_active" exact className="nav-link" to="/data">Data</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="menu_active" exact className="nav-link" to="/visual">Visual</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar;