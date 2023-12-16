"use client";
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./Icons";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 200 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 rounded p-2 outline-none border border-slate-900 dark:border-slate-300 bg-gray-300/50 dark:bg-slate-900/50 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <ArrowUpIcon className="h-6 w-6" />
    </button>
  );
}