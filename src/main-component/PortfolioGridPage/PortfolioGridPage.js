import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ProjectSectionS5 from '../../components/ProjectSectionS5/ProjectSectionS5';
import Footer from '../../components/footer/Footer';
import NewsLatter from '../../components/NewsLatter/NewsLatter';

const PortfolioGridPage = (props) => {

    return (
        <Fragment>
            <Header2 hclass={'header-style-3'} />
            <PageTitle pageTitle={'Portfolio'} pagesub={'portfolio'} />
            <ProjectSectionS5/>
            <NewsLatter />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default PortfolioGridPage;
