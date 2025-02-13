"use client";
import React, { useState } from "react";
import SocialIcons from "../SocialIcons";
import { useTheme } from "@/context/ThemeContext";

function HomeSection6() {
      const { isDarkMode } = useTheme();
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  }
 

  return (
    <>
      <section id="contact" className="bg-sky-500 flex flex-col gap-4 md:gap-9  -mx-[20px] md:-mx-[70px] pb-[10vh]  md:mb-[11vh]">
        <div className="relative text-center  py-10 text-white font-bold text-3xl">
          <div className={`${isDarkMode?"bg-zinc-900":"bg-gray-100"} absolute top-0 left-0 w-full h-10  clip-triangle`}></div>
          <h1 className="text-2xl md:text-5xl h-[8vh] md:h-[15vh]  flex items-end justify-center font-bold text-center text-white font-montserrat">
            CONTACT
          </h1>
          <div className="md:w-10 w-[9vw] h-[2px] md:h-1 mt-[2px] bg-white mx-auto md:mt-2"></div>
        </div>

        <div className="text-white flex flex-col items-center font-normal md:p-0 p-4 md:font-semibold">
          <p className="text-center">Have a question? Want to Collaborate? Just want to chat?</p>
          <p>React out to me on</p>
        </div>
        <div className="flex justify-center">
          <SocialIcons />
        </div>

        <div className="flex justify-center ">
           <form className="flex flex-col gap-3 w-[65vw]">
            <legend className="text-white text-center">Send me message</legend>
            <input
              onChange={(e) => handleChange(e)}
              name="fullName"
              value={userData.fullName}
              className=" rounded-xl p-3 hover:bg-neutral-300 placeholder-duration-700 focus:outline-none focus:border-transparent focus:bg-neutral-300 focus:placeholder-font-bold focus:placeholder-white "
              type="text"
              placeholder="Full Name"
            />
            <input
              onChange={(e) => handleChange(e)}
              name="email"
              value={userData.email}
              className=" rounded-xl p-3 hover:bg-neutral-300 focus:outline-none focus:border-transparent focus:bg-neutral-300 focus:placeholder-font-bold focus:placeholder-white "
              type="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => handleChange(e)}
              name="subject"
              value={userData.subject}
              className=" rounded-xl p-3 hover:bg-neutral-300 focus:outline-none focus:border-transparent focus:bg-neutral-300 focus:placeholder-font-bold focus:placeholder-white "
              type="text"
              placeholder="Subject"
            />
            <textarea
              onChange={(e) => handleChange(e)}
              name="message"
              value={userData.message}
              className=" h-[20vh] resize-none rounded-xl p-3 hover:bg-neutral-300 focus:outline-none focus:border-transparent focus:bg-neutral-300 focus:placeholder-font-bold focus:placeholder-white"
              placeholder="Message"
            ></textarea>
            <button className="bg-[#0B2F9F]  duration-500 text-white py-2 w-fit px-4 md:w-[6vw] rounded-lg">
              Submit
            </button>
          </form> 
        </div>
      </section>
    </>
  );
}

export default HomeSection6;
