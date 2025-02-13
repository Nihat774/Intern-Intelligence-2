"use client"
import { useTheme } from '@/context/ThemeContext';
import React from 'react'

function Footer() {
  const date = new Date()
  const year = date.getFullYear()
   const { isDarkMode } = useTheme();
  
  return (
    <>
      <footer className={`${isDarkMode?"bg-black text-white":"bg-white text-black"} font-semibold flex justify-center  py-2 -mx-[20px] md:-m-[70px] `}>Nihat Abdullah &copy; {year} </footer>
    </>
  )
}

export default Footer
