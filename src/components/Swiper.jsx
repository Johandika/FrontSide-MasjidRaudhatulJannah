import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { pohonpahala } from "../assets/images";

export default function SwiperModule() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper rounded-xl border-4 border-white ">
        <SwiperSlide>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>{" "}
          <div className="absolute bottom-16 right-3 left-3 ">
            <h1 className="text-3xl font-bold text-white">Pohon Pahala</h1>
            <p className="font-base text-white">
              Melakukan penanaman Pohon Pahala oleh kru Erje TV
            </p>
          </div>
          <img src={pohonpahala} alt="Slide1" style={{ height: 500, objectFit: "cover" }} />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>{" "}
          <div className="absolute bottom-10 right-3 left-3 ">
            <h1 className="text-4xl font-bold text-white">Pohon Pahala</h1>
            <p className="font-base text-white mt-4">
              Melakukan penanaman Pohon Pahala oleh kru Erje TV
            </p>
          </div>
          <img src={pohonpahala} alt="Slide1" style={{ height: 500, objectFit: "cover" }} />
        </SwiperSlide>

        <div className="autoplay-progress opacity-50" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
