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
      <div className="flex justify-between mb-8">
        <div className="flex flex-col relative gap-2">
          <ElementIcon className="absolute -top-3 -right-5 -z-10" />
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
        slidesPerView={slidesPerView}
        spaceBetween={20}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{
          clickable: true,
        }}
      >
        {cardsData.map((card) => (
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
