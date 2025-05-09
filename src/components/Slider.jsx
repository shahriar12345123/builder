// src/components/Slider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
    return (
        <div className="my-8">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 2500 }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="w-full max-w-5xl mx-auto max-h-11/12 rounded-lg overflow-hidden"
            >
                <SwiperSlide className="h-56 max-w-full">
                    <img src="https://i.ibb.co.com/JL8hBXy/First-Bankof-US00-crop.jpg" alt="Finance 1" />
                </SwiperSlide>
                <SwiperSlide className="h-56 max-w-full">
                    <img className="max-h-8/12" src=" https://i.ibb.co.com/VYdFzrzB/digital-banking-fintech-big-tech.webp         " alt="Banking 2" />
                </SwiperSlide>
                <SwiperSlide className="h-56 max-w-full">
                    <img src="https://i.ibb.co.com/JL8hBXy/First-Bankof-US00-crop.jpg" alt="Payment 3" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
