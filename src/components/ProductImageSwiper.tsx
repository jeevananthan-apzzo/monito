import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
  images: string[];
}

export default function ProductImageSwiper({ images }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ width: "100%" }}>
      {/* MAIN IMAGE SWIPER */}
      <div style={{ position: "relative" }}>
        <IconButton
          className="swiper-button-prev"
          sx={{
            position: "absolute",
            top: "50%",
            left: "10px",
            zIndex: 10,
            backgroundColor: "white",
            "&:hover": { backgroundColor: "#eee" },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton
          className="swiper-button-next"
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            zIndex: 10,
            backgroundColor: "white",
            "&:hover": { backgroundColor: "#eee" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        <Swiper
          modules={[Navigation, Pagination, Thumbs]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          loop
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src }
                alt={`Image ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "450px",
                  objectFit: "contain",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "10px",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* THUMBNAIL SWIPER */}
      <Swiper
        className="thumbnail-swiper"
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbsSwiper}
        freeMode
        watchSlidesProgress
        slidesPerView={5} // show 5 thumbnails
        spaceBetween={10}
        style={{ marginTop: "15px" }}
      >
        {images.map((src, idx) => (
          <SwiperSlide
            className="thumbnail-swiper-img-container"
            key={idx}
            style={{
              display:"flex",
              justifyContent: "center",
              alignItems: "center",
              width: "67px !important",
              height: "67px",
              cursor: "pointer",
              borderRadius: "6px",
              border:
                activeIndex === idx
                  ? "2px solid #F1D092"
                  : "2px solid transparent",
            }}
          >
            <img
              src={src}
              alt={`Thumb ${idx + 1}`}
              style={{
                width: "67px !important",
                height: "67px",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
