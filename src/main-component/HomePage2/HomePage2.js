import React, { Fragment } from 'react';
import Hero2 from '../../components/hero2/hero2';
import Header3 from '../../components/header3/Header3';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import About from '../../components/about/about';
import Exprience from '../../components/Exprience/Exprience';
import ExprienceService from '../../components/ExprienceService/ExprienceService';
import EventSectionS2 from '../../components/EventSectionS2/EventSectionS2';
import SkillSection from '../../components/SkillSection/SkillSection';
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import ContactSection from '../../components/ContactSection';
import Footer2 from '../../components/footer2/Footer2';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage2 = () => {

    return (
        <Fragment>
            <div className="dark-page">
                <Header3 />
                <Hero2 />
                <MarqueeSection />
                <About />
                <Exprience />
                <ExprienceService eClass={'pt-0'}/>
                <EventSectionS2/>
                <SkillSection/>
                <ProjectSectionS2 pClass={'pt-0'}/>
                <EventSectionS2 />
                <ContactSection />
                <Footer2 /> 
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage2;