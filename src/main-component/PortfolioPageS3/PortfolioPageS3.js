import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ProjectSectionS4 from '../../components/ProjectSectionS4/ProjectSectionS4';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import Footer from '../../components/footer/Footer';

const PortfolioPageS3 = (props) => {

    return (
        <Fragment>
            <Header2 hclass={'header-style-3'} />
            <PageTitle pageTitle={'Portfolio'} pagesub={'portfolio'} />
            <div className="porfolio-page">
                <ProjectSectionS4/>
            </div>
            <NewsLatter />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default PortfolioPageS3;
