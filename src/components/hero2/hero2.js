import React from 'react';
import { Link } from 'react-router-dom'
import hero1 from '../../images/hero/man.png'
import shape1 from '../../images/hero/exprience.png'
import shape2 from '../../images/hero/diamond.png'
import shape3 from '../../images/hero/arrow.png'
import { Slide } from "react-awesome-reveal";

const Hero2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={`static-hero-s2 section-fluid ${props.hClass}`} id="home">
            <div className="container-fluid">
                <div className="static-hero-wrap">
                    <div className="row ">
                        <div className="col-xl-4 col-lg-4 col-12">
                            <div className="static-hero-text">
                                <Slide direction='left' triggerOnce={'false'} duration={1200}>
                                    <h2>Hello,</h2>
                                </Slide>
                                <Slide direction='left' triggerOnce={'false'} duration={1400}>
                                    <p>Award-winning product
                                        designer specialized in UX/UI,
                                        <Link onClick={ClickHandler} to="/contact">currently living in NY <i
                                            className="ti-arrow-top-right"></i></Link>
                                    </p>
                                </Slide>
                                <Slide direction='left' triggerOnce={'false'} duration={1500}>
                                    <div className="separator"><i
                                        className="ti-angle-right"></i></div>
                                </Slide>
                                <Slide direction='left' triggerOnce={'false'} duration={1600}>
                                    <div className="download-btn">
                                        <button className="btn-style-1">Download CV <i
                                            className="ti-arrow-top-right"></i></button>
                                    </div>
                                </Slide>
                                <div className="diamond-shape">
                                    <img src={shape2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <Slide direction='up' triggerOnce={'false'} duration={1200}>
                                <div className="middle-image">
                                    <img src={hero1} alt="" />
                                    <div className="back-shape">
                                        <svg viewBox="0 0 566 473" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M525.222 410.261C631.093 315.594 494.406 261.577 519.597 181.577C544.789 101.577 608.552 -18.7325 370.638 2.46375C132.723 23.66 -64.7963 264.476 20.0214 377.812C104.839 491.149 419.351 504.929 525.222 410.261Z"
                                                fill="#FF4A3B" />
                                        </svg>
                                    </div>
                                    <div className="exprience-wrap">
                                        <div className="exprience-inner">
                                            <i><img src={shape1} alt="" /></i>
                                            <p>10+ <span>Years
                                                Experience</span></p>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="hero-right-text">
                                <Slide direction='right' triggerOnce={'false'} duration={1200}>
                                    <h3>Jane Cooper</h3>
                                </Slide>
                                <Slide direction='right' triggerOnce={'false'} duration={1400}>
                                    <h4>UX/ UI Designer</h4>
                                </Slide>
                                <Slide direction='right' triggerOnce={'false'} duration={1600}>
                                    <div className="hero-social">
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/">fb</Link></li>
                                            <li><Link onClick={ClickHandler} to="/">tw</Link></li>
                                            <li><Link onClick={ClickHandler} to="/">in</Link></li>
                                            <li><Link onClick={ClickHandler} to="/">be</Link></li>
                                        </ul>
                                    </div>
                                </Slide>
                                <div className="arrow-shape">
                                    <img src={shape3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero2;