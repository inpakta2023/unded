import { React, useState, useEffect, useRef } from 'react'
import Projects from '../../api/project'
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

const ProjectSectionS5 = (props) => {

    // Isotope filter activation

    const containerRef = useRef(null);
    const iso = useRef(null);
    const [activeFilter, setActiveFilter] = useState('*');

    useEffect(() => {
        imagesLoaded(containerRef.current, function () {
            iso.current = new Isotope(containerRef.current, {
                itemSelector: '.filter-item',
                layoutMode: 'fitRows',
            });
        });
        return () => {
            iso.current.destroy();
        };
    }, []);

    const handleFilterClick = (filterValue) => {
        setActiveFilter(filterValue);
        iso.current.arrange({ filter: filterValue });
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="porfolio-page">
            <div className="project-section-s2 section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="portfolio-filters">
                                <ul>
                                    <li>
                                        <button onClick={() => handleFilterClick('*')} className={activeFilter === '*' ? 'active' : ''}>All</button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleFilterClick('.BranDing')} className={activeFilter === '.BranDing' ? 'active' : ''}>Branding-app</button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleFilterClick('.landing')} className={activeFilter === '.landing' ? 'active' : ''}>Landing app</button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleFilterClick('.web')} className={activeFilter === '.web' ? 'active' : ''}>Web design</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="portfolio-container portfolio-fancybox masonry-gallery row gallery-container" ref={containerRef}>
                                {Projects.slice(6, 10).map((project, srv) => (
                                    <div className={`col-lg-6 col-md-6 col-12 grid-item filter-item ${project.filterName}`} key={srv}>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSectionS5;