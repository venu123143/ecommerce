import React from 'react'
import styles from '../../styles/style'
import EventCard from "../Events/EventCard"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productData } from '../../staticdata/data';
const Events = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    
    return (
        <>
            <div className={`${styles.section}`}>
                <div className={`${styles.heading}`}>
                    <h1>Popular Events</h1>
                </div>
                <div className="">
                    <Slider {...settings}>
                    {productData && productData.map((i,index)=>(
                        <EventCard key={index} image={i.image_Url} price={i.price} name={i.name.split(" ")[0]} />

                    ))}

                    </Slider>

                </div>

            </div>
        </>
    )
}

export default Events