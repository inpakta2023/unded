import React from 'react';
import { Slide, JackInTheBox } from "react-awesome-reveal";
import hero1 from '../../images/hero/vector.png'
import shape1 from '../../images/hero/clover.png'
import shape2 from '../../images/hero/exprience.png'
import shape3 from '../../images/hero/wear.png'


const Hero3 = () => {

    return (
        <section className="static-hero-s3 section-fluid">
            <div className="container">
                <div className="static-hero-content">
                    <h4>Hello,</h4>
                    <h2>
                        <i><img src={shape1} alt="" /></i> Creat<span>ive
                            <b>
                                <Slide direction='down' triggerOnce={'false'}>
                                    <img src={hero1} alt="" />
                                </Slide>
                            </b>
                        </span>
                    </h2>
                    <h2>Designer</h2>
                    <JackInTheBox direction='left' triggerOnce={'false'}>
                        <div className="exprience-wrap">
                            <div className="exprience-inner">
                                <i><img src={shape2} alt="" /></i>
                                <p>10+ <span>Years
                                    Experience</span></p>
                            </div>
                        </div>
                    </JackInTheBox>
                </div>
                <div className="shape">
                    <img src={shape3} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero3;