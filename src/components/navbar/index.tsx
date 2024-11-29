"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { WhatsappIcon } from "../icon";
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
            <Link
              href="#"
              className="flex flex-row px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-[#EDAF05] rounded-full hover:bg-[#edb705d7] lg:mt-0 lg:ml-auto lg:w-auto"
            >
              <WhatsappIcon className="w-5 h-5 mr-2" />
              {t("navbar.contactUs")}
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
