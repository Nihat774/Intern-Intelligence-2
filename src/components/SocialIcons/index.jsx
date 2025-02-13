import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import Link from 'next/link';
function SocialIcons() {
    const socialIcon = [
        { href: "https://www.linkedin.com/in/nihatm%C9%99mm%C9%99dov/", hoverColor: "hover:text-blue-500", image: <FaLinkedin /> },
        { href: "https://github.com/Nihat774", hoverColor: "hover:text-black", image: <FaGithub /> },
        { href: "mailto:nihatmemmedov.0520@gmail.com", hoverColor: "hover:text-red-600", image: <BiLogoGmail /> },
        { href: "https://wa.me/+994557748548", hoverColor: "hover:text-green-600", image: <FaWhatsapp /> },
      ];
  return (
    <>
     <div className="flex md:justify-start justify-center gap-5">
            {socialIcon.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Link
                    className={`${item.hoverColor} duration-500 hover:bg-white text-2xl md:text-3xl p-2 md:p-3 rounded-full bg-sky-500 text-white`}
                    href={item.href}
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    {item.image}
                  </Link>
                </React.Fragment>
              );
            })}
          </div> 
    </>
  )
}

export default SocialIcons
