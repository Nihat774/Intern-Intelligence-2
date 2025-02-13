"use client"
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";

function HomeSection4() {
       const { isDarkMode } = useTheme();
       const sectionRef = useRef(null);
           const [isVisible, setIsVisible] = useState(false);
         
           useEffect(() => {
             const observer = new IntersectionObserver(
               ([entry]) => {
                 if (entry.isIntersecting) {
                   setIsVisible(true);
                 }
               },
               { threshold: 0.3 }
             );
         
             if (sectionRef.current) {
               observer.observe(sectionRef.current);
             }
         
             return () => {
               if (sectionRef.current) {
                 observer.unobserve(sectionRef.current);
               }
             };
           }, []);
  return (
    <section ref={sectionRef} className="py-7">
      <div className={`${isVisible ? "animate-fadeInRight" : "opacity-0"} flex md:flex-row flex-col gap-3 md:gap-7`}>
        {/* image */}
        <div className="md:w-[25vw] w-[55vw] h-[20vh] md:h-[33vh] rounded-xl md:rounded-3xl bg-neutral-100 flex justify-center items-center shadow-lg  hover:shadow-xl hover:shadow-neutral-700  duration-500">
          <GrServices className={`text-2xl w-[23vw] h-[15vh] hover:scale-125 duration-500 ${!isDarkMode?"text-neutral-700":"text-black"}`} />
        </div>
        {/* text */}
        <div className={`${isDarkMode?"text-neutral-400":"text-neutral-600"} flex flex-col gap-5`}>
          <div>
            <h2 className="font-semibold text-xl">Combi-Servis</h2>
            <h3 className=" font-semibold">Freelance</h3>
            <p className="">August 2023 - Present</p>
          </div>
          <div>
            <p className=" w-full md:w-[40vw]">
              Combi service refers to the maintenance, repair, and installation
              of combi heating systems. These systems provide both heating and
              hot water for homes and offices. Regular servicing ensures the
              efficiency and longevity of the combi boiler. Professional
              maintenance helps reduce energy consumption and prevents
              unexpected breakdowns.
            </p>

            <div className="flex gap-3">
              <Link href="https://www.kombiustasixirdalan.az/" target="_blank">
                <FaLink className="hover:text-neutral-500 text-2xl cursor-pointer duration-500" />
              </Link>

              <Link href={"/"} target="_blank">
                <FaGithub className="hover:text-neutral-500 text-2xl cursor-pointer duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection4;
