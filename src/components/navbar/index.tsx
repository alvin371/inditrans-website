"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { WhatsappIcon } from "../icon";
import DropdownLanguage from "../dropdown/language";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white dark:bg-gray-900">
      <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center justify-between">
          <Link href="#">
            <div className="flex flex-row">
              <Image
                width={1920}
                height={1080}
                className="w-auto h-6 sm:h-14"
                src="/images/inditrans-logo.png"
                alt="Logo"
              />
              <Image
                width={1920}
                height={1080}
                className="w-auto hidden lg:block sm:h-14"
                src="/images/inditrans-title-logo.png"
                alt="Logo"
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
          <Link
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Our Office
          </Link>
          <Link
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Tracking
          </Link>
          <Link
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Layanan
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md dark:bg-gray-900 lg:bg-transparent lg:shadow-none lg:relative lg:flex lg:items-center lg:justify-center lg:space-x-8 lg:w-auto lg:opacity-100 lg:translate-x-0 ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8 lg:hidden">
            <Link
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Our Office
            </Link>
            <Link
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Tracking
            </Link>
            <Link
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Layanan
            </Link>
          </div>

          {/* Get Started Button - aligned to the right */}
          <div className="flex flex-row space-x-4">
            <DropdownLanguage />
            <Link
              href="#"
              className="flex flex-row px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-[#EDAF05] rounded-full hover:bg-[#edb705d7] lg:mt-0 lg:ml-auto lg:w-auto"
            >
              <WhatsappIcon className="w-5 h-5 mr-2" />
              Hubungi Kami
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
