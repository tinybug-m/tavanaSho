import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { Children, cloneElement, useRef } from "react";
import { Pagination } from "swiper/modules";

/**
 * Icons
 */
import Left from "../assets/icons/Left.svg";
import Right from "../assets/icons/Right.svg";
import ElementSVG from "../assets/icons/element.svg";

const MainCarousel = ({
  data,
  title,
  desc,
  navigateType,
  slidesPerView,
  children,
}) => {
  const swiperRef = useRef(null);

  return (
    <div className="">
      <div className="flex justify-between mb-8">
        <div className="flex flex-col relative gap-2">
          <img
            src={ElementSVG}
            className="absolute -top-3 -right-5 -z-10"
            alt="backdrop"
          />
          <h2 className="font-bold text-4xl">{title}</h2>
          <h4 className="font-light text-2xl text-gray-600">{desc}</h4>
        </div>

        {/* Custom Navigation Buttons */}
        {navigateType == "buttons" && (
          <div className="flex gap-4">
            <button
              className="btn rounded-full w-14 h-14 bg-gray-950 !p-1"
              onClick={() => swiperRef.current?.slidePrev()} // Move to previous slide
            >
              <img src={Right} alt="Right Icon" />
            </button>
            <button
              className="btn rounded-full w-14 h-14 bg-transparent border-2 border-gray-950 p-1"
              onClick={() => swiperRef.current?.slideNext()} // Move to next slide
            >
              <img src={Left} alt="Left Icon" />
            </button>
          </div>
        )}
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[navigateType == "buttons" ? Navigation : Pagination]}
        style={{
          paddingBottom: navigateType !== "buttons" ? "40px" : "0",
          padding: "50px 0",
        }}
        slidesPerView={slidesPerView} // Adjust this for mobile
        spaceBetween={20}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance in ref
        pagination={{
          clickable: true,
        }}
      >
        {data.map((card) => (
          <SwiperSlide key={card.id}>
            {Children.map(children, (child) =>
              cloneElement(child, { data: card })
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainCarousel;
