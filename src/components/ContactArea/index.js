import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'


const ContactArea = (props) => {
    return (
        <div className="contact-page-wrap">
            <section className="map-section" >
                <h2 className="hidden">Contact map</h2>
                <div className="map">
                    <iframe title='map'
                        src="https://maps.google.com/maps?q=university%20of%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                        allowFullScreen></iframe>
                </div>
            </section >
            <section className="contact-page section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="section-title-s3">
                                <span>News Letter</span>
                                <h2>Subscribe to our newsletter for updates</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-6">
                            <div className="office-info">
                                <h3>Malmo office</h3>
                                <div className="row">
                                    <div className="col col-xl-6 col-lg-6 col-md-6 col-12">
                                        <div className="office-info-item">
                                            <div className="office-info-text">
                                                <ul>
                                                    <li><i className="fi flaticon-phone-call"></i> + 1 (246) 333-0088
                                                    </li>
                                                    <li><i className="fi flaticon-email"></i> alma.law@example.com
                                                    </li>
                                                    <li><i className="fi flaticon-placeholder"></i> 4140 Parker Rd.
                                                        Allentown, New Mexico 31134</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-xl-6 col-lg-6 col-md-6 col-12">
                                        <div className="office-info-item">
                                            <div className="office-info-text">
                                                <ul>
                                                    <li><i className="fi flaticon-phone-call"></i> (406) 555-0120</li>
                                                    <li><i className="fi flaticon-email"></i> nathan.rober@example.com
                                                    </li>
                                                    <li><i className="fi flaticon-placeholder"></i> 3517 W. Gray St.
                                                        Utica, Pennsylvania 57867</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form-area">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactArea;