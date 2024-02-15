import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import logo from '../../images/logo-2.svg'
import MobileMenu2 from '../MobileMenu2/MobileMenu2';

const Header4 = (props) => {

    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header-area header-style-4 ${isSticky ? 'sticky' : ''}`} id="header">
            <div id="sticky-header" className="menu-area">
                <div className="container-fluid">
                    <div className="second-menu">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-7 col-7">
                                <div className="logo">
                                    <NavLink onClick={ClickHandler} to="/home"><img src={logo} alt="logo" /></NavLink>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-1 col-1 text-right text-xl-right d-none d-lg-block">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul className="nav">
                                            <li><Link to="home" spy={true} smooth={true} duration={500} offset={-100} className="menu-item">_home</Link></li>
                                            <li><Link to="about" spy={true} smooth={true} duration={500} offset={-100} className="menu-item">_about</Link></li>
                                            <li><Link to="portfolio" spy={true} smooth={true} duration={500} offset={-100} className="menu-item">_portfolio</Link></li>
                                            <li><Link to="skill" spy={true} smooth={true} duration={500} offset={-100} className="menu-item">_skill</Link></li>
                                            <li><Link to="blog" spy={true} smooth={true} duration={500} offset={-100} className="menu-item">_blog</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-3 text-left">
                                <div className="header-area-right">
                                    <ul>
                                        <li><span className="search-toggle-btn" onClick={() => setMenuState(!menuActive)}>Search</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-1">
                                <MobileMenu2 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`header-search-form ${menuActive ? "active" : ""}`}>
                <button className="close-header-search" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></button>
                <form method="post" onSubmit={SubmitHandler}>
                    <div className="form-group">
                        <input type="text" name="search" value="" placeholder="Search Here" required="" />
                        <button type="submit" className="search-btn"><i className="ti-search"></i></button>
                    </div>
                </form>
            </div>
        </header>
    )
}

export default Header4;