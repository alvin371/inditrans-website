"use client";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function DropdownLanguage() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation(); // Use i18n instance from react-i18next

  // Function to handle language change
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setIsOpen(false); // Close dropdown after selection
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Dropdown toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative z-10 flex items-center p-2 text-sm text-white lg:text-gray-600 bg-[#002C4A] lg:bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"
      >
        <span className="mx-1">{i18n.language.toUpperCase()}</span>
        <svg
          className="w-5 h-5 mx-1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        className={`absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-[#002C4A] lg:bg-white rounded-md shadow-xl dark:bg-gray-800 transform transition-all duration-200 ease-out ${
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <button
          onClick={() => changeLanguage("id")}
          className="block w-full text-left px-4 py-3 text-sm text-white lg:text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Bahasa Indonesia
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className="block w-full text-left px-4 py-3 text-sm text-white lg:text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          English
        </button>
      </div>

      <style jsx>{`
        .transition-all {
          transition: opacity 0.2s ease-out, transform 0.2s ease-out;
        }
        .opacity-100 {
          opacity: 1;
        }
        .scale-100 {
          transform: scale(1);
        }
        .opacity-0 {
          opacity: 0;
        }
        .scale-90 {
          transform: scale(0.9);
        }
      `}</style>
    </div>
  );
}
