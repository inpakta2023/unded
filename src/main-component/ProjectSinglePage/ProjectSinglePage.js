import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom'
import Projects from '../../api/project'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const ProjectSinglePage = (props) => {

    const { slug } = useParams()

    const PracticeDetails = Projects.find(item => item.slug === slug)

    return (
        <Fragment>
            <Header2 hclass={'header-style-3'} />
            <PageTitle pageTitle={PracticeDetails.title} pagesub={'Project'} />
            <div className="porfolio-single-page">
                <div className="portfolio-details-wrap section-padding">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="portfolio-details-img">
                                    <img src={PracticeDetails.psImg} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="portfolio-details-text">
                                    <h2>{PracticeDetails.title}</h2>
                                    <div className="portfolio-text-items">
                                        <div className="portfolio-text-item">
                                            <h4>Client:</h4>
                                            <span>Robert Fox</span>
                                        </div>
                                        <div className="portfolio-text-item">
                                            <h4>Designer:</h4>
                                            <span>Cameron Williamson</span>
                                        </div>
                                        <div className="portfolio-text-item">
                                            <h4>Category:</h4>
                                            <span>Drawing</span>
                                        </div>
                                        <div className="portfolio-text-item">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recent-project-section section-padding pt-0">
                    <div className="container">
                        <div className="section-title-s3">
                            <span>Recent Portfolio</span>
                            <h2>Related Work</h2>
                        </div>
                        <div className="project-active-s2">
                            <div className="row">
                                {Projects.slice(2, 5).map((project, srv) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                        <div className={`project-item s-${project.Id}`}>
                                            <div className="project-img">
                                                <img src={project.pImg} alt="" />
                                            </div>
                                            <div className="project-text">
                                                <h2><Link onClick={ClickHandler} to={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                                <span>{project.sub}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectSinglePage;
