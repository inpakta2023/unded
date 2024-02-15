import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import MobileMenu from '../MobileMenu/MobileMenu';
import Projects from '../../api/project'

const Header = (props) => {

    const [menuActive, setMenuState] = useState(false);
    const [rightActive, setRightState] = useState(false);

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
                                        <li><Link onClick={ClickHandler} to="/" className="search-toggle-btn"><i className="ti-search" onClick={() => setMenuState(!menuActive)}></i></Link>
                                        </li>
                                        <li className="header-right-menu-wrapper">
                                            <div className="right-menu-toggle-btn">
                                                <div className="right-menu-toggle-btn-wrap" onClick={() => setRightState(!rightActive)}>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </li>
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
            <div className={`header-right-menu-wrap ${rightActive ? "right-menu-active" : ""}`}>
                <div className="all-close" onClick={() => setRightState(!rightActive)}></div>
                <button className="right-menu-close" onClick={() => setRightState(!rightActive)}><i className="ti-close"></i></button>
                <div className="logo"><img src="assets/images/logo.svg" alt="" /></div>
                <div className="header-right-sec">
                    <div className="project-widget widget">
                        <h3>Our Latest Projects</h3>
                        <ul className="d-flex">
                            {Projects.slice(0, 6).map((project, srv) => (
                                <li key={srv}><Link onClick={ClickHandler} to={`/project-single/${project.slug}`}> <img src={project.pImg} alt="" /></Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="widget contact-widget">
                        <div className="widget-title">
                            <h3>Contact Us</h3>
                        </div>
                        <div className="contact-ft">
                            <ul>
                                <li><i className="fi flaticon-placeholder"></i>68D, Belsion Town
                                    2365 <br /> Fna city, LH 3656, USA</li>
                                <li><i className="fi flaticon-phone-call"></i>+ 1 (246) 333-0088 <br />
                                    + 1 (246) 333-0088</li>
                                <li><i className="fi flaticon-email"></i>alma.lawson@example.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget newsletter-widget">
                        <div className="widget-title">
                            <h3>Newsletter</h3>
                        </div>
                        <form onSubmit={SubmitHandler}>
                            <div className="input-1">
                                <input type="email" className="form-control" placeholder="Email Address *" required="" id="femail" />
                                <div className="submit clearfix">
                                    <button type="submit"><i className="ti-arrow-top-right"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;