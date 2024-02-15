import React, { Fragment } from 'react';
import Header4 from '../../components/header4/Header4';
import Hero2 from '../../components/hero2/hero2';
import PartnerSection from '../../components/PartnerSection';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import MarqueeSectionS2 from '../../components/MarqueeSectionS2/MarqueeSectionS2';
import ProjectSectionS4 from '../../components/ProjectSectionS4/ProjectSectionS4';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import SkillSection from '../../components/SkillSection/SkillSection';
import VideoSectionS2 from '../../components/VideoSectionS2/VideoSectionS2';
import BlogSectionS2 from '../../components/BlogSectionS2/BlogSectionS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage4 = () => {

    return (
        <Fragment>
            <Header4 />
            <Hero2 hClass={'static-hero-s4'} />
            <PartnerSection pClass={'black-bg'}/>
            <ServiceSectionS2 />
            <MarqueeSectionS2 />
            <ProjectSectionS4 />
            <NewsLatter />
            <SkillSection sClass={'skill-service-s2'} tClass={'section-title-s3 text-center'}/>
            <VideoSectionS2 />
            <BlogSectionS2 />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage4;