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
                className="w-full max-w-5xl mx-auto rounded-lg overflow-hidden"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/JL8hBXy/First-Bankof-US00-crop.jpg" alt="Finance 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/nqGKmcZW/1601317670-1.jpg" alt="Banking 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/JL8hBXy/First-Bankof-US00-crop.jpg" alt="Payment 3" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
