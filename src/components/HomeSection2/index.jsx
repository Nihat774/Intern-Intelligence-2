"use client";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa6";

function HomeSection2() {
  const [loading, setLoading] = useState(false);
    const { isDarkMode } = useTheme();
  return (
    <>
      <section id="experience" className=" flex flex-col gap-7">
        <div className={`${isDarkMode?"text-white":"text-black"} flex flex-col justify-end gap-1 items-center h-[20vh]`}>
          <h1 className={`text-3xl md:text-5xl  font-bold text-center font-montserrat`}>
            EXPERIENCE
          </h1>
          <hr className={`${!isDarkMode?"bg-black":"bg-white"} h-[3px] w-[30px] md:w-[50px] `} />
        </div>

        <div className="flex md:flex-row flex-col gap-3 md:gap-7">
          <div className="md:w-[25vw] w-[60vw] h-[20vh] md:h-[33vh]  ">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            )}
            <img
              src="/projectLogo/console.jpg"
              alt="Console Game"
              className={`${isDarkMode?"bg-white":""} w-full h-full rounded-xl md:rounded-3xl shadow-neutral-400 shadow-md hover:shadow-lg hover:shadow-neutral-400 duration-500`}
              onLoad={() => setLoading(false)}
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className={`${isDarkMode?"text-neutral-400":"text-neutral-600"}`}>
              <h2 className="font-semibold text-xl">Console Game</h2>
              <h3 className=" font-semibold">Freelance</h3>
              <p className="">August 2023 - Present</p>
            </div>
            <div className={`${isDarkMode?"text-neutral-400":"text-neutral-600"}`}>
              <p className=" w-full md:w-[40vw]">
                A fun console-based game, built using JavaScript. The console
                game industry has evolved significantly, offering immersive
                graphics, engaging gameplay, and multiplayer experiences across
                various platforms.
              </p>

              <div className="flex gap-3">
                <Link href="https://consolegame.vercel.app/" target="_blank">
                  <FaLink className="hover:text-neutral-500 text-2xl cursor-pointer duration-500" />
                </Link>
                <Link href={"/"} target="_blank">
                  <FaGithub className="hover:text-neutral-500 text-2xl cursor-pointer duration-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* blog 2 */}
        <div className="flex min-h-[46vh] items-center justify-end mt-5">
          <div className="flex md:flex-row flex-col-reverse gap-3 md:gap-7">
            <div className="flex flex-col gap-7 items-end justify-between">
              <div className={`flex flex-col items-end ${isDarkMode?"text-neutral-400":"text-neutral-600"}`}>
                <h2 className="font-semibold text-xl">BDA Academy</h2>
                <h3 className="font-semibold">Freelance</h3>
                <p>May 2024</p>
              </div>
              <div className={`${isDarkMode?"text-neutral-400":"text-neutral-600"} flex flex-col items-end`}>
                <p className=" md:w-[40vw] text-end">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                  inventore, ipsum laborum voluptate, quas saepe illo
                  dignissimos fugiat excepturi nemo expedita id ad dolores
                  suscipit minima consequuntur aliquam impedit voluptates vitae
                  praesentium! Quibusdam, eveniet doloremque nihil blanditiis
                  harum fugiat alias ullam. Architecto saepe hic, voluptatem
                  porro provident quibusdam modi aliquam!
                </p>

                <div className="flex gap-3">
                  <Link href="https://bdacademy.az/" target="_blank">
                    <FaLink className="hover:text-neutral-500 text-2xl cursor-pointer duration-500" />
                  </Link>

                  <Link href={"/"} target="_blank">
                    <FaGithub className="hover:text-neutral-500 text-2xl cursor-pointer duration-500" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            )}
              <img
                src="/projectLogo/bda-logo.svg"
                alt="bda logo"
                loading="lazy"
                onLoad={()=>setLoading(false)}
                className={`${isDarkMode?"bg-white":""} md:w-[25vw] w-[55vw] h-[20vh] md:h-[33vh] rounded-xl md:rounded-3xl shadow-neutral-400 shadow-md hover:shadow-lg hover:shadow-neutral-400   duration-500`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeSection2;
