import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom'
import Services from '../../api/service'
import aImg from '../../images/about.png'
import eImg1 from '../../images/event/icon1.png'
import eImg2 from '../../images/event/icon2.png'
import eImg3 from '../../images/event/icon3.png'
import eImg4 from '../../images/event/icon4.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const AboutMePage = (props) => {

    return (
        <Fragment>
            <Header2 hclass={'header-style-3'} />
            <PageTitle pageTitle={'About me'} pagesub={'about'} />
            <section className="about-page section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="about-page-left">
                                <div className="about-content">
                                    <h2>Jane Cooper</h2>
                                    <h3>UX/ UI Designer</h3>
                                    <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur
                                        ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id
                                        massa ante. Suspendisse sit amet neque euismod, convallis quam eget,
                                        dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id.
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                        ac turpis egestas. Integer nec quam ut tortor efficitur consectetur sed
                                        vitae nisi. Phasellus convallis vulputate euismod. Pellentesque lacinia
                                        rutrum libero, sit amet aliquam ante viverra a. Ut sem ipsum, tempor nec
                                        rutrum in, gravida eu ipsum.</p>
                                </div>

                                <div className="event-section">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="event-items">
                                                    <h3>Awards</h3>
                                                    <div className="event-item">
                                                        <div className="icon"><img src={eImg1} alt="" /></div>
                                                        <div className="text">
                                                            <h4>awwards AWARD</h4>
                                                            <span>June 2023</span>
                                                        </div>
                                                    </div>
                                                    <div className="event-item">
                                                        <div className="icon"><img src={eImg2} alt="" /></div>
                                                        <div className="text">
                                                            <h4>Campaign AWARD</h4>
                                                            <span>June 2013</span>
                                                        </div>
                                                    </div>
                                                    <div className="event-item">
                                                        <div className="icon"><img src={eImg3} alt="" /></div>
                                                        <div className="text">
                                                            <h4>Animation AWARD</h4>
                                                            <span>Aug 2010</span>
                                                        </div>
                                                    </div>
                                                    <div className="event-item">
                                                        <div className="icon"><img src={eImg4} alt="" /></div>
                                                        <div className="text">
                                                            <h4>Peach Of the day</h4>
                                                            <span>Aug 2000</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="event-items">
                                                    <h3>Events</h3>
                                                    <div className="event-item">
                                                        <div className="text">
                                                            <h4>CES 2021</h4>
                                                            <span>February 2023</span>
                                                        </div>
                                                    </div>
                                                    <div className="event-item">
                                                        <div className="text">
                                                            <h4>Campaign ARTS</h4>
                                                            <span>June 2013</span>
                                                        </div>
                                                    </div>
                                                    <div className="event-item">
                                                        <div className="text">
                                                            <h4>Tokiko Art</h4>
                                                            <span>Aug 2010</span>
                                                        </div>
                                                    </div>
                                                    <div className="event-item">
                                                        <div className="text">
                                                            <h4>Best Design Award</h4>
                                                            <span>Aug 2000</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-section-s2">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-12">
                                            <div className="service-wrap">
                                                <div className="row">
                                                    {Services.slice(0, 2).map((service, srv) => (
                                                        <div className="ol col-lg-6 col-md-6 col-12" key={srv}>
                                                            <div className="service-item">
                                                                <i><img src={service.sIcon} alt="" /></i>
                                                                <h2><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                                                <p>{service.des2}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about-apge-right-img">
                                <img src={aImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutMePage;
