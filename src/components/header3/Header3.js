import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import portal from '../../images/hero/portal.png'


const Header3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header className="header-area header-style-2">
            <div id="header-sticky" className="menu-area">
                <div className="container-fluid">
                    <div className="second-menu">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-5 col-5">
                                <div className="logo">
                                    <Link onClick={ClickHandler} to="/home"><img src={logo} alt="logo"/></Link>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-7 col-7 text-left">
                                <div className="header-area-right">
                                    <div className="c-btn"><Link onClick={ClickHandler} to="/contact">Let’s Talk</Link></div>
                                    <div className="star"><img src={portal} alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header3;