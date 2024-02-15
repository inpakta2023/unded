import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo-2.svg'
import MobileMenu from '../MobileMenu/MobileMenu';


const Header2 = (props) => {

    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <header className={`header-area ${props.hclass}`}>
            <div id="header-sticky" className="menu-area">
                <div className="container-fluid">
                    <div className="second-menu">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-7 col-7">
                                <div className="logo">
                                    <Link onClick={ClickHandler} to="/home"><img src={logo} alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-1 col-1 text-right text-xl-right d-none d-lg-block">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul className="nav">
                                            <li className="has-submenu">
                                                <Link onClick={ClickHandler} to="/home">_home</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/home">Home Page 01</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home-2">Home Page 02</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home-3">Home Page 03</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home-4">Home Page 04</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-submenu"><Link onClick={ClickHandler} to="/about-me">_pages</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/about-me">About Me</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/about-us">About Us</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/services">Services</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/service-single/Creative-Design">Service Single</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/team">Team Page</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/team-single/Thomas">Team Single</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/pricing">Pricing</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/404">404</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-submenu"><Link onClick={ClickHandler} to="/portfolio">_portfolio</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/portfolio">Portfolio Grid</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/portfolio-s2">Portfolio Grid S2</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/portfolio-s3">Portfolio Grid S3</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/project-single/Business">Portfolio Single</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-submenu">
                                                <Link onClick={ClickHandler} to="/home">_blog</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/blog-grid">Blog Grid Style</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/blog-right-sidebar">Blog right sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog fullwidth</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/blog-single/10-Reasons-why-you-should-make-a-physical-portfolio">Blog Single Main</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/blog-single-sidebar/10-Reasons-why-you-should-make-a-physical-portfolio">Blog Single Sidebar</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link onClick={ClickHandler} to="/contact">_contact</Link></li>
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
                                <MobileMenu />
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

export default Header2;