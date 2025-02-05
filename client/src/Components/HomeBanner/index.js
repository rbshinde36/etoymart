
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { MyContext } from "../../App";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const HomeBanner = (props) => {

    const context = useContext(MyContext);

    return (
        <div className="container mt-3">
            <div className="homeBannerSection">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    navigation={context.windowWidth > 992 ? true : false}
                    loop={true}
                    speed={500}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {
                        props?.data?.length !== 0 && props?.data?.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="item">
                                        <LazyLoadImage
                                            alt={"image"}
                                            effect="blur"
                                            className="w-100 img1"
                                            src={`${process.env.REACT_APP_API_URL}/download/${item?.images[0]?.replaceAll(' ', '')}`}
                                        />

                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }


                </Swiper>
            </div>
        </div>
    )
}

export default HomeBanner;