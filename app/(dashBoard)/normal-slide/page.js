/* eslint-disable react-hooks/rules-of-hooks */
"use client"
// Import Swiper React components
import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import GetSlideData from '@/app/Api/sliderApi';

import Image from "next/image";

const normalSlider = () => {
    const [dataset, setDataset] = useState([]);
    
    useEffect(() => {
        (async () => {
            const data = await GetSlideData();
            setDataset(data);
        })();
    }, []);

    return (
        <div className="container mx-auto">
            <div className="relative">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={"auto"}
                    spaceBetween={50}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".next",
                        prevEl: ".prev",
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {dataset?.map((image) => (
                        <SwiperSlide key={image.id}>
                            <div>
                                <Image
                                    alt="data"
                                    className="h-screen aspect-video object-cover swiper-slide rounded-lg"
                                    width={1500}
                                    height={1500}
                                    src={image.img}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <p className="next absolute top-1/2 -right-10 z-10 cursor-pointer select-none">Right</p>
                <p className=" prev absolute top-1/2 -left-10 z-10 cursor-pointer select-none">Left</p>
            </div>
        </div>
        
    );
};

export default normalSlider;