import React from 'react';
import Projects from '../../api/project'
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import arrow from '../../images/project/arrow.png'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const ProjectSectionS2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`project-section-s2 section-padding ${props.pClass}`}>
            <div className="container">
                <div className="project-wrap sortable-gallery">
                    <div className="row masonry-gallery">
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
                            <Masonry columnsCount={4} gutter="20px">
                                {Projects.slice(6, 10).map((project, srv) => (
                                    <div className="grid-item" key={srv}>
                                        <Slide direction='up' triggerOnce={'false'}>
                                            <div className="project-item">
                                                <div className="project-img">
                                                    <img src={project.pImg} alt="" />
                                                </div>
                                                <div className="project-text">
                                                    <div className="project-left">
                                                        <h2><Link onClick={ClickHandler} to={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                                        <span>{project.sub}</span>
                                                    </div>
                                                    <div className="arrow-btn">
                                                        <Link onClick={ClickHandler} to={`/project-single/${project.slug}`}><i className="ti-arrow-top-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>

                    </div>
                    <div className="project-btn">
                        <Link onClick={ClickHandler} to="/portfolio" className="fancy-btn">Click More <i className="ti-arrow-down"></i></Link>
                    </div>
                </div>
            </div>
            <div className="left-arrow">
                <img src={arrow} alt="" />
            </div>
        </section>
    );
}

export default ProjectSectionS2;