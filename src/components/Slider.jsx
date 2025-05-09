
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
                className="w-full max-w-5xl mx-auto max-h-96 rounded-lg overflow-hidden"
            >
                <SwiperSlide className="w-5xl h-96 flex justify-center items-center">
                    <img
                        src="https://i.ibb.co.com/bMNKb9Xn/pgcb.jpg"
                        alt="PGCB"
                        className="w-5xl h-96 object-contain rounded-lg shadow-md"
                    />
                </SwiperSlide>

                <SwiperSlide className="w-5xl h-96 flex justify-center items-center">
                    <img
                        src="https://i.ibb.co.com/gqkYVkS/wasa.png"
                        alt="WASA"
                        className="w-full h-96 object-contain rounded-lg shadow-md"
                    />
                </SwiperSlide>

                <SwiperSlide className="w-5xl h-96 flex justify-center items-center">
                    <img
                        src="https://i.ibb.co.com/JL8hBXy/First-Bankof-US00-crop.jpg"
                        alt="Payment 3"
                        className="w-5xl h-96 object-contain rounded-lg shadow-md"
                    />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;
