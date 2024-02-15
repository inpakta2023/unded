import React from 'react';
import star from '../../images/star.png'

const MarqueeSection = (props) => {

    return (
        <div className="animate-marque-sec">
            <div className="animate-marque">
                <div className="marquee">
                    <div className="track">
                        <div className="content">
                            <h1>
                                <span>Creative</span> <i><img src={star} alt=""/></i>
                                <span>Design</span> <i><img src={star} alt=""/></i>
                                <span>UX</span> <i><img src={star} alt=""/></i>
                                <span>Web</span> <i><img src={star} alt=""/></i>
                                <span>Development</span> <i><img src={star} alt=""/></i>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarqueeSection;