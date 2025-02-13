"use client"
import React from "react";
import Slider from "../Swiper";
import { useTheme } from "@/context/ThemeContext";

function  HomePage5() {
  const { isDarkMode } = useTheme();
  return (
    <>
      <section id="testimonials" className="mb-[20vh]">
        <div className="flex flex-col justify-end md:justify-end h-[25vh] items-center pb-5">
          <h1 className={`${isDarkMode?"text-white":"text-black"} text-3xl md:text-5xl  font-bold text-center font-montserrat`}>TESTIMONIALS</h1>
          <hr className="h-[3px] md:h-[5px] w-[40px] bg-black" />
        </div>
        <Slider />  
      </section>
    </>
  );
}

export default HomePage5;
