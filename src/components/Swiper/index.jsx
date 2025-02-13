"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import { sliderData } from "@/constants";
import { useTheme } from "@/context/ThemeContext";

export default function Slider() {
         const { isDarkMode } = useTheme();
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      loop={true}
      keyboard={{ enabled: true }}
      mousewheel={{ enabled: true }}
      modules={[Navigation, Pagination, Keyboard, Mousewheel]}
      className=""
    >
      {sliderData.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className=" ">
              <SwiperSlide className="flex justify-center items-center   text-lg font-semibold ">
                <div className=" flex flex-col gap-3 p-1 py-5">
                  <h1 className={`${isDarkMode?"text-white":"text-black"} text-3xl font-semibold px-2 md:px-5 `}>
                    {item.h1Text}
                  </h1>
                  <div className="flex gap-5 px-0 md:px-5">
                    <div>
                      <img
                        className="size-[30px] md:size-[50px] rounded-full"
                        src={item.image}
                        alt="user image"
                        loading="lazy"
                      />
                    </div>
                    <div className={`${isDarkMode?"text-neutral-300":"text-neutral-600"}`}>
                      <p className=" font-semibold">
                        {item.name}
                      </p>
                      <p>{item.status}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </React.Fragment>
        );
      })}
    </Swiper>
  );
}
