import Sectiontitle from "../Shared/SectionTitle/Sectiontitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import {BiSolidQuoteLeft } from "react-icons/bi";


const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div>
            <Sectiontitle
                heading='What Our Clients Say'
                subHeading='TESTIMONIALS'
            ></Sectiontitle>
            <div className="mt-10 mb-10">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                   <div className="" >
                   {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center w-9/12 mx-auto p-6" >
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="text-4xl"><BiSolidQuoteLeft></BiSolidQuoteLeft></p>
                                <p>{review.details}</p>
                                <h1 className="text-4xl">{review.name}</h1>
                            </div>
                        </SwiperSlide>)
                    }
                   </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;