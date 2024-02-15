import React, { Fragment } from 'react';
import Hero3 from '../../components/hero3/hero3';
import Header2 from '../../components/Header2/Header2';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import MarqueeSectionS2 from '../../components/MarqueeSectionS2/MarqueeSectionS2';
import ProjectSectionS3 from '../../components/ProjectSectionS3/ProjectSectionS3';
import PartnerSection from '../../components/PartnerSection';
import TestimonialS2 from '../../components/TestimonialS2/TestimonialS2';
import VideoSectionS2 from '../../components/VideoSectionS2/VideoSectionS2';
import TeamSectionS2 from '../../components/TeamSectionS2/TeamSectionS2';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import BlogSectionS2 from '../../components/BlogSectionS2/BlogSectionS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage3 = () => {

    return (
        <Fragment>
            <Header2 hclass={'header-style-3'} />
            <Hero3 />
            <ServiceSectionS2 pClass={'pt-0'}/>
            <MarqueeSectionS2 />
            <ProjectSectionS3 />
            <PartnerSection pClass={'black-bg'}/>
            <TestimonialS2 />
            <VideoSectionS2 />
            <TeamSectionS2 />
            <NewsLatter />
            <BlogSectionS2 />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage3;