import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Doctor1 from "../assets/Doctor1.png";
import Doctor2 from "../assets/Doctor2.png";
import Doctor3 from "../assets/Doctor3.png";
import Doctor4 from "../assets/Doctor4.png";
import Doctor5 from "../assets/Doctor5.png";

const doctors = [
  {
    id: 1,
    name: "Dr. Lesley Hull",
    specialization: "Medicine",
    image: Doctor1,
  },
  {
    id: 2,
    name: "Dr. Ankur Sharma",
    specialization: "Medicine",
    image: Doctor2,
  },
  {
    id: 3,
    name: "Dr. Sheena Sachdeva",
    specialization: "Orthopedics",
    image: Doctor3,
  },
  {
    id: 4,
    name: "Dr. Ahmad Khan",
    specialization: "Neurologist",
    image: Doctor4,
  },
  {
    id: 5,
    name: "Dr. Ahmad Stevens",
    specialization: "Neurologist",
    image: Doctor5,
  },
];

const DoctorCarousal = () => {
  return (
    <div style={{ width: "90%", margin: "auto", textAlign: "center" }}>
      <h2>Our Medical Specialist</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        style={{ padding: "20px" }}
      >
        {doctors.map((doctor) => (
          <SwiperSlide key={doctor.id}>
            <div
              style={{
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                background: "white",
                textAlign: "center",
              }}
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                style={{
                  width: "200px",
                  height: "200px",
                  // borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <h3 style={{ marginTop: "10px", marginBottom: "5px" }}>
                {doctor.name}
              </h3>
              <p style={{ color: "#007bff" }}>{doctor.specialization}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DoctorCarousal;
