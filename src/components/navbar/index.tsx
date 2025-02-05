"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import DropdownLanguage from "../dropdown/language";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="bg-white dark:bg-gray-900 sticky top-0 z-50">
      <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center justify-between">
          <Link href="#">
            <div className="flex flex-row">
              <Image
                width={1920}
                height={1080}
                className="w-auto h-12 sm:h-14"
                src="/images/inditrans-logo.png"
                alt="Logo"
                unoptimized
              />
              <Image
                width={1920}
                height={1080}
                className="w-auto h-12 sm:h-14"
                src="/images/inditrans-title-logo.png"
                alt="Logo"
                unoptimized
              />
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-8">
          {["home", "aboutUs", "ourOffice", "tracking", "services"].map(
            (section) => (
              <button
                key={section}
                onClick={() => {
                  if (section === "tracking") {
                    window.open("https://tracking.inditrans.co.id/", "_blank");
                  } else {
                    scrollToSection(section);
                  }
                }}
                className="text-gray-700 dark:text-gray-200 group relative hover:font-semibold font-medium"
              >
                {t(`navbar.${section}`)}
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#002C4A] group-hover:w-full"></span>
              </button>
            )
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 mt-2 transition-all duration-300 ease-in-out bg-[#002C4A] text-white shadow-md dark:bg-gray-900 lg:bg-transparent lg:shadow-none lg:relative lg:flex lg:items-center lg:justify-center lg:space-x-8 lg:w-auto lg:opacity-100 lg:translate-x-0 ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-4 lg:hidden">
            {["home", "aboutUs", "ourOffice", "tracking", "services"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => {
                    if (section === "tracking") {
                      window.open(
                        "https://tracking.inditrans.co.id/",
                        "_blank"
                      );
                    } else {
                      scrollToSection(section);
                      setIsOpen(false);
                    }
                  }}
                  className="text-gray-200 hover:text-gray-400 hover:font-medium text-start"
                >
                  {t(`navbar.${section}`)}
                </button>
              )
            )}
            <DropdownLanguage />
          </div>

          {/* Get Started Button */}
          <div className="hidden lg:flex flex-row space-x-4">
            <DropdownLanguage />
            <p
              onClick={() => {
                window.open(
                  "https://wa.me/6281214502716?text=Hi, We have plan to move and need some advise.",
                  "_blank"
                );
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 175.216 175.552"
                className="w-10 h-10"
              >
                <defs>
                  <linearGradient
                    id="whatsapp-gradient"
                    x1="85.915"
                    x2="86.535"
                    y1="32.567"
                    y2="137.092"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#57d163" />
                    <stop offset="1" stopColor="#23b33a" />
                  </linearGradient>
                  <filter
                    id="shadow"
                    width="1.115"
                    height="1.114"
                    x="-.057"
                    y="-.057"
                    colorInterpolationFilters="sRGB"
                  >
                    <feGaussianBlur stdDeviation="3.531" />
                  </filter>
                </defs>
                <path
                  fill="#b3b3b3"
                  d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
                  filter="url(#shadow)"
                />
                <path
                  fill="#fff"
                  d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
                />
                <path
                  fill="url(#whatsapp-gradient)"
                  d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
                />
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
                />
              </svg>
            </p>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
