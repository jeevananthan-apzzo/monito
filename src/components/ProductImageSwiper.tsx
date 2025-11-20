// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { IconButton } from "@mui/material";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// interface Props {
//   images: string[];
// }

// export default function ProductImageSwiper({ images }: Props) {
//   return (
//     <div style={{ position: "relative", width: "100%",}}>
//       {/* Navigation Buttons */}
//       <IconButton
//         className="swiper-button-prev"
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "10px",
//           zIndex: 10,
//           backgroundColor: "white",
//           "&:hover": { backgroundColor: "#eee" },
//         }}
//       >
//         <ArrowBackIosNewIcon />
//       </IconButton>

//       <IconButton
//         className="swiper-button-next"
//         sx={{
//           position: "absolute",
//           top: "50%",
//           right: "10px",
//           zIndex: 10,
//           backgroundColor: "white",
//           "&:hover": { backgroundColor: "#eee" },
//         }}
//       >
//         <ArrowForwardIosIcon />
//       </IconButton>

//       {/* Swiper */}
//       <Swiper
//         modules={[Navigation, Pagination]}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         pagination={{ clickable: true }}
//         loop
//         spaceBetween={20}
//         slidesPerView={1}
//         style={{ width: "100%", borderRadius: "10px" }}
//       >
//         {images.map((src, idx) => (
//           <SwiperSlide key={idx}>
//             <img
//               src={src}
//               alt={`Product image ${idx + 1}`}
//               style={{
//                 width: "100%",
//                 height: "450px",
//                 objectFit: "contain",
//                 borderRadius: "10px",
//                 backgroundColor: "#f9f9f9",
//               }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Thumbs,
  FreeMode,
} from "swiper/modules";

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
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
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
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbsSwiper}
        freeMode
        watchSlidesProgress
        slidesPerView={5}   // show 5 thumbnails
        spaceBetween={10}
        style={{ marginTop: "15px" }}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx} style={{ cursor: "pointer" }}>
            <img
              src={src}
              alt={`Thumb ${idx + 1}`}
              style={{
                width: "100%",
                height: "70px",
                objectFit: "cover",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
