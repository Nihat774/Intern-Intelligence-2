"use client";
import React from "react";
import SocialIcons from "../SocialIcons";
import { useTheme } from "@/context/ThemeContext";

function HomeSection1() {
  const { isDarkMode } = useTheme();
  return (
    <>
      <section
        id="home"
        className="flex md:flex-row flex-col-reverse justify-between items-center min-h-[90vh]"
      >
        <div className="flex flex-col gap-7">
          <div className="flex flex-col md:items-start items-center gap-2">
            <p className="bg-sky-500 text-white w-fit py-1 px-3 rounded-t-2xl rounded-r-2xl font-roboto">
              Hello! I am
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold font-montserratBold ">
              Nihat Abdullah
            </h1>
            <p className="text-neutral-400 text-xl font-semibold font-roboto">
              Front-end developer
            </p>
          </div>

          <SocialIcons />
        </div>

        <div>
          <div
            className={`${
              isDarkMode ? "border-zinc-700" : "border-neutral-300"
            } rounded-full border-[17px] `}
          >
            <div
              className={`${
                isDarkMode ? "border-neutral-600" : "border-neutral-400"
              } rounded-full border-[17px] `}
            >
              <div
                className={`${
                  isDarkMode ? "border-zinc-500" : "border-neutral-500"
                } rounded-full border-[17px] `}
              >
                <img
                  src="/personalİmage1.jpg"
                  className="rounded-full w-[150px] md:size-[250px] object-cover"
                  alt="man"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeSection1;
