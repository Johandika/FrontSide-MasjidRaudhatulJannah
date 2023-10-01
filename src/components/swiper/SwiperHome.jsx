/* eslint-disable react/prop-types */
import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { pohonpahala } from "../../assets/images";

const swiperData = [
  {
    id: 1,
    title: "Pohon Pahala",
    src: pohonpahala,
    alt: "Pohon Pahala",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias blanditiis rem nobis nisi dolorem voluptate, consectetur neque at quia repudiandae.",
  },
  {
    id: 2,
    title: "Rumah Tahfidz Akhawat",
    src: pohonpahala,
    alt: "Pohon Pahala",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias blanditiis rem nobis nisi dolorem voluptate, consectetur neque at quia repudiandae.",
  },
  {
    id: 3,
    title: "Ponpes Baitussalam",
    src: pohonpahala,
    alt: "Pohon Pahala",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias blanditiis rem nobis nisi dolorem voluptate, consectetur neque at quia repudiandae.",
  },
  {
    id: 4,
    title: "Sosial Ambulance",
    src: pohonpahala,
    alt: "Pohon Pahala",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias blanditiis rem nobis nisi dolorem voluptate, consectetur neque at quia repudiandae.",
  },
];

export default function SwiperModuleHome() {
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
        className="mySwiper rounded-xl border-4 border-white "
      >
        {/* Cuma mengambil 3 data terakhir saja dari Array */}
        {swiperData.slice(-3).map((data) => (
          <SwiperSlide key={data.id}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>{" "}
            <div className="absolute bottom-10 right-3 left-3 ">
              <h1 className="text-3xl font-bold text-white mb-2">
                {data.title}
              </h1>
              <p className="font-base text-white w-full text-sm sm:text-base sm:w-3/5 mx-auto">
                {data.body}
              </p>
            </div>
            <img
              src={data.src}
              alt={`${data.alt}`}
              style={{ height: 500, objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}

        <div
          className="autoplay-progress opacity-50"
          slot="container-end"
        >
          <svg
            viewBox="0 0 48 48"
            ref={progressCircle}
          >
            <circle
              cx="24"
              cy="24"
              r="20"
            ></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
