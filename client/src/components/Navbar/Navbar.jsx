import React from 'react';
import {Link} from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ initializing }) => {

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <div className="header__logo">
                            <Link to="/" className="header__logo-link">ONOI</Link>
                        </div>
                        <div className="header__logo-location">
                            Кыргызстан
                        </div>
                    </div>

                    <div className="header__right">
                        <nav className="nav">
                            <Link className="nav__link-lang" to="/g">ru</Link>
                            <Link className="nav__link-signIn" to={initializing === true ? "/profile/my_orders" : "/login"}>Войти</Link>
                            <Link className="nav__link-placeAd" to="/placement"><i className="fa fa-plus"/>  Разместить</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;