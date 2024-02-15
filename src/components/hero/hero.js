import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import hero1 from '../../images/hero/mask-1.jpg'
import shape1 from '../../images/hero/back-shape.png'
import shape2 from '../../images/hero/star.png'
import { Slide } from "react-awesome-reveal";

const Hero = () => {

    return (
        <section className="static-hero">
            <div className="container-fluid">
                <div className="static-hero-wrap">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-7 col-12">
                            <div className="static-hero-text">
                                <Slide direction='up' triggerOnce={'false'}>
                                    <div className="sub-title">
                                        <span>Always Inovative</span>
                                    </div>
                                </Slide>
                                <Slide direction='up' triggerOnce={'false'}>
                                    <h2>Your Design Our Solutions</h2>
                                </Slide>
                                <Slide direction='up' triggerOnce={'false'}>
                                    <p><i><img
                                        src={shape2} alt="" /></i> We are helping client
                                        to create WordPress websites with our talented expert. Quam nulla porttitor
                                        massa id neque. Est placerat in egestas.</p>
                                </Slide>
                                <Slide direction='up' triggerOnce={'false'}>
                                    <div className="hero-btn">
                                        <AnchorLink href='#service'>
                                            <button className="fancy-btn">Read
                                                case study <i className="ti-arrow-down"></i></button>
                                        </AnchorLink>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="right-image">
                                <div className="right-image-mask">
                                    <img src={hero1} alt="" />
                                </div>
                                <div className="back-shape">
                                    <Slide direction='right' triggerOnce={'false'}>
                                        <img src={shape1} alt="" />
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-bottom-shape">
                        <svg width="100%" height="175" viewBox="0 0 1760 175" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1760 0H0V175C684 6 1388.21 57.1384 1760 175V0Z" fill="#FF4A3B" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;