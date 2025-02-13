"use client"
import { navLinks } from "@/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useTheme } from "@/context/ThemeContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      for (let link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(link.id);
          }
        }
      }
    };
   

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll funksiyası
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header
        className={`${
          (isScrolled && !isOpen)? ` ${isDarkMode?"bg-black md:shadow-lg shadow-white":"bg-white md:shadow-xl shadow-black"} ` : ""
        } flex items-center justify-between py-4  ${
          isOpen ? "fixed top-0 left-0  bg-neutral-600 w-screen" : "sticky top-0 px-[20px]"
        } z-10 transition-all duration-300  md:px-[70px] -mx-[20px] md:-mx-[70px] `}
      >
        <a href="#" className={` font-bold text-xl flex ${isDarkMode?"text-white":""}`}>
          Nihat Abdullah
        </a>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-semibold transition-all duration-300 ${
                activeSection === item.id
                  ? "text-blue-500 font-bold border-b-2 border-sky-500"
                  : "text-neutral-500"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex justify-start md:hidden ">
          {isOpen ? (
            <div className=" h-[100vh]" onClick={handleOpen}>
              <IoCloseOutline
              className={`text-3xl cursor-pointer transition-all duration-300 transform rotate-180 mr-5`}
              
            />
            </div>
          ) : (
            <RxHamburgerMenu
              className={`text-3xl cursor-pointer transition-all duration-300 ${isDarkMode?"text-white":"text-black"}`}
              onClick={handleOpen}
            />
          )}
        </div>
      </header>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } p-[20px] z-20 fixed flex-col justify-center gap-7 bg-neutral-300 left-[0%] h-full w-[70%]`}
      >
        <Link href={"/"}>
          <p className="text-neutral-500 text-6xl">Nihat</p>
          <p className="text-neutral-500 font-bold text-4xl">Abdullah</p>
        </Link>
        <nav className="flex flex-col gap-3  h-[60%]">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id), setIsOpen(!isOpen);
              }}
              className={`font-semibold transition-all duration-300  w-fit ${
                activeSection === item.id
                  ? "text-blue-500 font-bold border-b-2  border-sky-500"
                  : "text-neutral-500"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Header;
