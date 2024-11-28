import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Link } from "react-router";
import { Sword, TrendingUp } from "lucide-react";

const CategoryTabs = () => {
  return (
    <div className="w-full mt-10">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide style={{ width: "110px" }}>
          <Link
            to=""
            className="bg-secondary-light h-[70px] p-5 rounded-md flex items-center justify-center shadow-sm"
          >
            <TrendingUp />
            Trending
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ width: "110px" }}>
          <Link
            to=""
            className="bg-secondary-light h-[70px] p-5 rounded-md flex items-center justify-center shadow-sm"
          >
            <Sword />
            Action
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ width: "110px" }}>
          <Link
            to=""
            className="bg-secondary-light h-[70px] p-5 rounded-md flex items-center justify-center shadow-sm"
          >
            Action Movies
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ width: "110px" }}>
          <Link
            to=""
            className="bg-secondary-light h-[70px] p-5 rounded-md flex items-center justify-center shadow-sm"
          >
            Action
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategoryTabs;
