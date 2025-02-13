"use client"
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import React from "react";

function AboutPage() {
  const { isDarkMode } = useTheme();
  return (
    <>
      <section id="about">
        <div className="flex flex-col justify-center items-center h-[30vh]">
          <h1 className="text-5xl  font-bold text-center">ABOUT</h1>
          <hr className={`${isDarkMode?"bg-white":"bg-black"} h-[5px] w-[30px] `} />
        </div>

        <div className="flex md:flex-row flex-col justify-center gap-5">
          <div className={`md:w-[30%] md:h-[40vh] w-full`}>
            <img
              className={`md:rounded-xl rounded-lg size-full ${isDarkMode?"bg-white":""} `}
              src="/dev.jpg"
              alt="developer image"
              loading="lazy"
            />
          </div>
          <div className={`flex flex-col gap-4 ${isDarkMode?"text-neutral-400":"text-neutral-600"} `}>
            <p className="md:w-[60vw] w-full ">
              I am Nihat. I am 19 years old. I develop various websites using
              HTML, CSS, JavaScript, React, and Next technologies as requested.
              I pay attention to the speed and performance of the websites I
              develop. I am able to work with groups. I always strive to write
              clean and efficient code. I keep up with the latest trends in web
              development. I enjoy solving complex coding problems. I have
              experience in both frontend and backend development. I constantly
              improve my skills by working on new projects. I am proficient in
              using Git and GitHub for version control. I have a strong
              understanding of responsive web design. I optimize websites for
              SEO and accessibility.
            </p>
            <Link
              href="https://docs.google.com/document/d/1fWPDunci8sHLLZ9ZdAt6S-ruZCrcYDGX/edit?usp=drive_link&ouid=113548448470932362972&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
               className="bg-sky-500 text-center p-2 rounded-3xl w-fit px-4  text-white font-semibold"
            >
                View resume
            </Link>

           
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
