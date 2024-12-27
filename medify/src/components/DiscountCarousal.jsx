import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Discount1 from "../assets/Discount1.png";
import Discount2 from "../assets/Discount2.png";

const DiscountCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      style={{ width: "100%", height: "300px" }}
    >
      {[Discount1, Discount2, Discount1, Discount2].map((image, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
              backgroundColor: "#E7F0FF",
            }}
          >
            <img
              src={image}
              alt={`Card ${index + 1}`}
              style={{
                borderRadius: "10px",
                width: "300px",
                height: "200px",
                objectFit: "cover",
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DiscountCarousel;
