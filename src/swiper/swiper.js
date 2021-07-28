import { FaBeer } from 'react-icons/fa';
import { Button } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Fade, Slide } from "react-awesome-reveal";
import './App.css';
import '../node_modules/swiper/swiper.min.css';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function Swiper() {
    return (
        <div className="App">

            <Swiper className="bg-danger d-flex"
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Swiper;