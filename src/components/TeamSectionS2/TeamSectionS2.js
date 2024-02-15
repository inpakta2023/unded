import React from 'react';
import Teams from '../../api/team'
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const TeamSectionS2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="team-section-s2 section-padding">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xl-4 offset-xl-1 col-lg-12">
                        <div className="team-left-text">
                            <span>Our Team</span>
                            <h2>Join a team of creatives</h2>
                            <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa.</p>
                            <Link onClick={ClickHandler} to="/'">View More</Link>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-12">
                        <div className="team-wrap">
                            <div className="row">
                                {Teams.slice(0, 3).map((team, tm) => (
                                    <div className="col col-lg-4 col-md-4 col-sm-6 col-12" key={tm}>
                                        <Slide direction='up' triggerOnce={'false'}>
                                            <div className="team-item">
                                                <div className="team-img">
                                                    <img className="imageParallax" src={team.tImg} alt="" />
                                                </div>
                                                <div className="team-text">
                                                    <h3><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.name}</Link></h3>
                                                    <span>{team.title}</span>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSectionS2;