"use client"
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa6";

function HomeSection3() {
     const { isDarkMode } = useTheme();
  const [loading, setLoading] = useState(false);
  return (
    <section className="py-7 flex flex-col gap-3 md:gap-7">
      <div className="flex md:flex-row flex-col gap-7">
        <div className="md:w-[25vw] w-[55vw] h-[20vh] md:h-[33vh] rounded-xl md:rounded-3xl">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          )}
          <img
            src="/projectLogo/codexpert-logo.svg"
            alt="logo"
            loading="lazy"
            onLoad={() => setLoading(false)}
            className={`${isDarkMode?"bg-white":""} w-full h-full rounded-xl md:rounded-3xl shadow-lg hover:shadow-xl hover:shadow-neutral-700 duration-500`}
          />
        </div>
        <div className={`${isDarkMode?"text-neutral-400":"text-neutral-600"} flex flex-col justify-between`}>
          <div>
            <h2 className="font-semibold text-xl">CodExpert</h2>
            <h3 className=" font-semibold">Freelance</h3>
            <p className="">August 2023 - Present</p>
          </div>
          <div>
            <p className=" w-full md:w-[40vw]">
              Take a step on your learning journey with our courses prepared by
              an experienced selection, gain new skills for your desired career,
              or even start a different field if you wish, we are with you.
            </p>

            <div className="flex gap-3">
              <Link href="https://codexpert.netlify.app/" target="_blank">
                <FaLink className="hover:text-neutral-500 text-2xl cursor-pointer duration-500" />
              </Link>

              <Link href={"/"} target="_blank">
                <FaGithub className="hover:text-neutral-500 text-2xl cursor-pointer duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* blog-4 */}
      <div className="flex min-h-[46vh] items-center justify-end mt-5">
        <div className="flex md:flex-row flex-col-reverse gap-3 md:gap-7">
          <div className={`flex flex-col gap-7 items-end justify-between ${isDarkMode?"text-neutral-400":"text-neutral-600"}`}>
            <div className="flex flex-col items-end">
              <h2 className="font-semibold text-xl">Personal Portfolio</h2>
              <h3 className=" font-semibold">Freelance</h3>
              <p className="">May 2024</p>
            </div>
            <div className={` flex flex-col items-end`}>
              <p className=" w-full md:w-[40vw] text-end">
                A personal portfolio is a website that showcases an individual's
                skills, projects, and experience. It serves as an online resume,
                allowing potential employers or clients to learn more about the
                person. A well-designed portfolio highlights key achievements
                and demonstrates expertise in a specific field. Many
                professionals, especially developers and designers, use
                portfolios to display their work visually.
              </p>

              <div className="flex gap-3">
                <Link href="https://nihatmammadov.vercel.app/" target="_blank">
                  <FaLink className="hover:text-neutral-500 text-2xl cursor-pointer duration-500" />
                </Link>

                <Link href={"/"} target="_blank">
                  <FaGithub className="hover:text-neutral-500 text-2xl cursor-pointer duration-500" />
                </Link>
              </div>
            </div>
          </div>
          <div className=" flex md:justify-start justify-end items-center ">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            )}
            <img
              src="/projectLogo/portfolio.jpg"
              alt="logo"
              loading="lazy"
              onLoad={() => setLoading(false)}
              className="object-cover md:w-[25vw] w-[55vw] h-[20vh] md:h-[33vh] rounded-xl md:rounded-3xl hover:shadow-xl shadow-lg hover:shadow-neutral-700  duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection3;
