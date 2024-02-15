import React from 'react';
import Slider from "react-slick";
import quote from '../../images/quote.png'
import arrow from '../../images/ts-arrow2.png'


const testimonial = [
    {
        id: '01',
        Des: "Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly enhance the credibility of the testimonials.",
        Title: 'Brooklyn Simmons',
        Sub: "CEO creative",
    },
    {
        id: '02',
        Des: "Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly enhance the credibility of the testimonials.",
        Title: 'Adam Pedro',
        Sub: "CEO Digital",
    },
    {
        id: '03',
        Des: "Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly enhance the credibility of the testimonials.",
        Title: 'Alkira Jemin',
        Sub: "CEO TBA",
    }
]

const TestimonialS2 = () => {

    const settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <section className="testimonial-section-s2 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="section-title-s3">
                            <span>CLIENT TESTIMONIAL</span>
                            <h2>What People are Saying!</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial-quote">
                            <img src={quote} alt="" />
                        </div>
                    </div>
                </div>
                <div className="testimonial-wrap testimonial-active-s2">
                    <Slider {...settings}>
                        {testimonial.map((testimonial, tsm) => (
                            <div className="testimonial-item" key={tsm}>
                                <p>{testimonial.Des}</p>
                                <span>{testimonial.Title} - <small>{testimonial.Sub}</small></span>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="arrow-shape">
                <img src={arrow} alt="" />
            </div>
        </section>
    );
}

export default TestimonialS2;