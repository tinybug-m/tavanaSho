import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { Children, cloneElement, useRef } from "react";
import { Pagination } from "swiper/modules";

import { LeftIcon, RightIcon, ElementIcon } from "../assets/icons";

const MainCarousel = ({
  cardsData,
  title,
  desc,
  navigateType,
  slidesPerView,
  children,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="">
      <div className="flex flex-col gap-2 md:flex-row md:gap-0 justify-between md:mb-8">
        <div className="flex flex-col relative gap-2">
          <ElementIcon className="absolute -top-3 -right-5 -z-10" />
          <h2 className="font-bold text-4xl">{title}</h2>
          <h4 className="font-light text-2xl text-gray-600">{desc}</h4>
        </div>

        {/* Custom Navigation Buttons */}
        {navigateType == "buttons" && (
          <div className="gap-4 hidden md:flex">
            <button
              className="btn rounded-full w-14 h-14 bg-gray-950 !p-1"
              onClick={() => swiperRef.current?.slidePrev()} // Move to previous slide
            >
              <RightIcon />
            </button>
            <button
              className="btn rounded-full w-14 h-14 bg-transparent border-2 border-gray-950 p-1"
              onClick={() => swiperRef.current?.slideNext()} // Move to next slide
            >
              <LeftIcon />
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
        // slidesPerView={slidesPerView}
        breakpoints={{
          320: {
            slidesPerView: 1.25,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: slidesPerView,
          },
          // 1440: {
          //   slidesPerView: 4,
          // },
        }}
        spaceBetween={20}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{
          clickable: true,
        }}
      >
        {cardsData.map((props) => (
          <SwiperSlide key={props.id}>
            {Children.map(children, (child) => cloneElement(child, { props }))}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainCarousel;
