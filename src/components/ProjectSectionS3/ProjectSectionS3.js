import React from 'react';
import Projects from '../../api/project'
import { Link } from "react-router-dom";

const ProjectSectionS3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="project-section-s3 section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div className="section-title-s3 text-center">
                            <span>Recent Work</span>
                            <h2>We are fully dedicated to creating authentic digital solutions.</h2>
                        </div>
                    </div>
                </div>
                <div className="project-wrap">
                    {Projects.slice(10, 13).map((project, srv) => (
                        <div className="project-item" key={srv}>
                            <div className="project-img">
                                <img src={project.pImg} alt="" />
                            </div>
                            <div className="project-text">
                                <span className="thumb">{project.sub}</span>
                                <h2><Link onClick={ClickHandler} to={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                <p>{project.description}</p>
                                <Link className="read-more" onClick={ClickHandler} to={`/project-single/${project.slug}`}>Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectSectionS3;