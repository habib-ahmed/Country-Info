"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun } from "./Icons";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="sticky top-0 z-50 shadow-xl bg-white dark:bg-slate-900 dark:shadow-2xl">
      <div className="flex justify-between container mx-auto mb-8 px-4 py-2 items-center duration-300">
        <Link href={"/"} className="font-bold text-xl md:text-2xl">
          Country Info
        </Link>

        <button
          className="p-3 flex items-center gap-1 hover:opacity-80 md:px-4 duration-300"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <>
              <Sun />
              <span className="text-xl ml-2 font-semibold hidden md:block">
                Light Mode
              </span>
            </>
          ) : (
            <>
              <Moon />
              <span className="text-xl ml-2 font-semibold hidden md:block">
                Dark Mode
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
