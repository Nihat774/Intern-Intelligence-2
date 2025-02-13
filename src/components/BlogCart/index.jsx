"use client";
import { cartLink } from "@/constants";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import React, { useState } from "react";
import { FaCommentDots, FaHeart } from "react-icons/fa6";

function Cart() {
  const [loading, setLoading] = useState(false);
    const { isDarkMode } = useTheme();
  return (
    <>
      <section id="blogs" className=" flex flex-col gap-5">
        <div className="flex flex-col justify-center items-center h-[15vh] md:h-[30vh]">
          <h1 className={`${isDarkMode?"text-white":"text-black"} text-3xl md:text-5xl  font-bold text-center font-montserrat`}>
            BLOGS
          </h1>
          <hr className= {`h-[2px] md:h-[5px] w-[30px]  ${!isDarkMode?"bg-black":"bg-white"}`} />
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {cartLink.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <Link
                  href={"/"}
                  className="card bg-base-100 w-full md:w-96 shadow-xl hover:shadow-xl hover:shadow-neutral-600 duration-500"
                >
                  <figure>
                    {loading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                        <span className="loading loading-spinner loading-lg"></span>
                      </div>
                    )}
                    <img
                      src={item.image}
                      alt="Shoes"
                      loading="lazy"
                      onLoad={()=>setLoading(false)}
                      className="h-[25vh] md:h-[30vh] w-full hover:scale-105 duration-500 "
                    />
                  </figure>

                  <div className="flex flex-col gap-3 p-4 h-[30vh]">
                    <h2 className="card-title text-neutral-600">{item.h1Text}</h2>
                    <p className="text-neutral-500 font-semibold">
                      {item.date}
                    </p>
                    <div className="card-actions justify-end">
                      {item.course.map((course, index) => {
                        return (
                          <React.Fragment key={index}>
                            <div className="badge badge-outline bg-sky-500 p-2 w-[20vw] md:w-[5vw] h-[25px] text-white">
                              {course}
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>

                    <div className="flex justify-between pt-3">
                      <div className="flex gap-2 text-neutral-600">
                        <FaHeart className="text-2xl" />
                        <p>{item.liked}</p>
                      </div>

                      <div className="flex gap-2 text-neutral-600">
                        <FaCommentDots className="text-2xl" />
                        <p>{item.comments}</p>
                      </div>
                    </div>
                  </div>
                </Link> 
              </React.Fragment>
            );
          })}
        </div>

        <div className="flex items-end justify-center h-[15vh]">
          <Link
            href={"https://dev.to/ruppysuppy"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 text-center text-white p-2 w-fit px-4 rounded-3xl"
          >
            View all blogs
          </Link>
        </div>
      </section>
    </>
  );
}

export default Cart;
