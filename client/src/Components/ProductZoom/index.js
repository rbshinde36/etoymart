import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useRef, useState } from 'react';

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


const ProductZoom = (props) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }


    return (
        <div className="productZoom">
            <div className='productZoom productZoomBig position-relative mb-3'>
                <div className='badge badge-primary'>{props?.discount}%</div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={false}
                    slidesPerGroup={1}
                    modules={[Navigation]}
                    className="zoomSliderBig"
                    ref={zoomSliderBig}
                >
                    {
                        props?.images?.map((img, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='item'>
                                        <InnerImageZoom
                                            zoomType="hover" zoomScale={1}
                                            src={`${process.env.REACT_APP_API_URL}/download/${img}`}
                                        />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }


                </Swiper>

            </div>


            <Swiper
                slidesPerView={5}
                spaceBetween={0}
                navigation={true}
                slidesPerGroup={1}
                modules={[Navigation]}
                className="zoomSlider"
                ref={zoomSlider}
            >
                {
                    props?.images?.map((img, index) => {
                        return (
                            <SwiperSlide>
                                <div className={`item ${slideIndex === index && 'item_active'}`} key={index}>
                                    <LazyLoadImage
                                        alt={"image"}
                                        effect="blur"
                                        className="w-100 img1"
                                         onClick={() => goto(index)}
                                        src={`${process.env.REACT_APP_API_URL}/download/${img}`}
                                    />
                             
                                </div>
                            </SwiperSlide>
                        )
                    })
                }



            </Swiper>
        </div>
    )
}

export default ProductZoom;