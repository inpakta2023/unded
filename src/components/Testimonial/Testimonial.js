import React from 'react';
import Slider from "react-slick";
import quote from '../../images/ts-arrow.png'


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

const Testimonial = () => {

    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };


    return (
        <section className="testimonial-section section-padding">
            <h2 className="hidden">some</h2>
            <div className="container">
                <div className="testimonial-wrap testimonial-active owl-carousel">
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
                <img src={quote} alt="" />
            </div>
        </section>
    );
}

export default Testimonial;