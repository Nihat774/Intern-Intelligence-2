"use client";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "@/context/ThemeContext";

function ModeIcon() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className={`${
        isDarkMode ? "shadow-white shadow-md" : "shadow-black shadow-lg"
      }  flex-1 rounded-full fixed bottom-[20px] right-[10px] bg-sky-500 cursor-pointer text-white p-2 text-2xl`}
    >
      {isDarkMode ? <FaMoon /> : <FaSun />}
    </div>
  );
}

export default ModeIcon;
