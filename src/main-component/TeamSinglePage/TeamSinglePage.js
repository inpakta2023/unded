import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import Footer from '../../components/footer/Footer';
import Teams from '../../api/team'
import sImg1 from '../../images/team/arrow2.png'
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import ContactForm from '../../components/ContactFrom/ContactForm';

const TeamSinglePage = (props) => {
    const { slug } = useParams()

    const TeamDetails = Teams.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Header2 hclass={'header-style-3'} />
            <PageTitle pageTitle={TeamDetails.name} pagesub={'Project'} />
            <section className="team-single-page section-padding">
                <div className="team-details-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="team-details-img">
                                    <img src={TeamDetails.tImg} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="team-details-text">
                                    <h2>{TeamDetails.name}</h2>
                                    <div className="team-text-items">
                                        <div className="team-text-item">
                                            <h4>Expart:</h4>
                                            <span>{TeamDetails.title}</span>
                                        </div>
                                        <div className="team-text-item">
                                            <h4>Position:</h4>
                                            <span>Senior Designer</span>
                                        </div>
                                        <div className="team-text-item">
                                            <h4>Exprience:</h4>
                                            <span>8 Years</span>
                                        </div>
                                        <div className="team-text-item">
                                            <h4>Share:</h4>
                                            <div className="social">
                                                <Link onClick={ClickHandler} to="/">fb</Link>
                                                <Link onClick={ClickHandler} to="/">tw</Link>
                                                <Link onClick={ClickHandler} to="/">In</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur
                                        ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id
                                        massa ante. Suspendisse sit amet neque euismod, convallis quam eget,
                                        dignissim massa.</p>

                                    <div className="arrow"><img src={sImg1} alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-area section-padding pb-0">
                    <div className="container">
                        <div className="contact-area-wrapper">
                            <div className="row">
                                <div className="col col-xl-5 col-lg-6">
                                    <div className="contact-info-wrap">
                                        <div className="contact-info-title">
                                            <h3>Contact Info</h3>
                                            <p>Use high-quality images and videos to create a visually</p>
                                        </div>
                                        <div className="contact-info-item">
                                            <div className="contact-info-icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                            <div className="contact-info-text">
                                                <span>Have Any Question?</span>
                                                <h4>Phone</h4>
                                            </div>
                                        </div>
                                        <div className="contact-info-item">
                                            <div className="contact-info-icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                            <div className="contact-info-text">
                                                <span>Send Email</span>
                                                <h4>wkrebs@verizon.net</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-7 col-lg-6 col-md-12 col-12">
                                    <div className="contact-form-area">
                                          <ContactForm/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <NewsLatter />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamSinglePage;
