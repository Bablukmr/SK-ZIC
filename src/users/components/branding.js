import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export default function Branding(props) {
  const { brandingimages, mobile } = props;
  return (
    <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      slidesPerView={3}
      effect={"coverflow"}
      spaceBetween={mobile ? 20 : 50}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      loop={true}
      modules={[Pagination, EffectCoverflow, Autoplay]}
      className="mySwiper"
    >
      {brandingimages?.map((d) => (
        <SwiperSlide key={d.id}>
          <img
            src={d.img}
            alt={d.img}
            className="w-full h-full object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
