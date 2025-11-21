"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { Box } from "@mui/material";

import "swiper/css";
import "swiper/css/pagination";

interface CustomerImageSwiperProps {
  images: string[];
  interval?: number; // autoplay interval
}

const CustomerImageSwiper: FC<CustomerImageSwiperProps> = ({
  images,
  interval = 10000, // default 3 sec
}) => {
  return (
    <Box sx={{ width: "100%", maxWidth: "100%", margin: "0 auto" }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={6} // 👈 show 3 at a time on desktop
        spaceBetween={20}
        autoplay={{
          delay: interval,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          0: {
            slidesPerView: 1.2, // mobile
          },
          600: {
            slidesPerView: 4, // small tablet
          },
          900: {
            slidesPerView: 5.3, // desktop
          },
        }}
        style={{ paddingBottom: "25px" }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: "100%", // 👈 allow dynamic width
                height: 350,
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: "#f4f4f4",
              }}
            >
              <Image
                src={src}
                alt={`Customer ${index}`}
                fill
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CustomerImageSwiper;
