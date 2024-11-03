// components/Footer.tsx
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col items-center md:items-start md:flex-row lg:justify-between">
        {/* Logo and Company Name */}
        <Link
              href="#"
          >
          <div className="flex flex-col align-middle items-center justify-center text-center">
            <Image
              src="/inditrans-logo.png" // Update the path to your logo image
              alt="Company Logo"
              width={20}
              height={20}
              />
            <h1 className="text-xl font-bold mt-2">
              PT. Inditrans Satu Nusantara
            </h1>
            <p className="text-gray-500">PACKING & DELIVERY</p>
          </div>
        </Link>

        {/* Office Locations */}
        <div className="mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">INDITRANS OFFICE</h2>
          <ul className="mt-2 text-sm">
            <Link
              href="#"
            >
            <li className="mb-2">Bali Office</li>   
            </Link>
            <Link
              href="#"
            >
              <li className="mb-2">Bekasi Office</li>
            </Link>
            <Link
              href="#"
            >
              <li className="mb-2">Palembang Office</li>
            </Link>
            <Link
              href="#"
            >
              <li className="mb-2">Kupang Office</li>
            </Link>
            <Link
              href="#"
            >
              <li className="mb-2">Warehouse Kupang</li>
            </Link>
            <Link
              href="#"
            >
              <li className="mb-2">Surabaya Office</li>
            </Link>
            <Link
              href="#"
            >
              <li className="mb-2">Lombok</li>
            </Link>
          </ul>
        </div>

        {/* Contact Info and Social Media Icons */}
        <div className="mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">CONTACT</h2>
          <Link
            href="#"
          >
            <p className="mt-2 text-sm">Inditrans@inditrans.co.id</p>
          </Link>
        </div>
        <div className="flex space-x-4 mt-8 md:mt-0 justify-center md:justify-start">
          <Link
            href="#"
          >
            <FaFacebook className="text-gray-700 hover:text-blue-600 cursor-pointer" />
          </Link>
          <Link
            href="#"
          >
            <FaInstagram className="text-gray-700 hover:text-pink-600 cursor-pointer" />
          </Link>
          <Link
            href="#"
          >
            <FaXTwitter className="text-gray-700 hover:text-blue-400 cursor-pointer" />
          </Link>
          <Link
            href="#"
          >
            <FaLinkedin className="text-gray-700 hover:text-blue-700 cursor-pointer" />
          </Link>
          <Link
            href="#"
          >
            <FaYoutube className="text-gray-700 hover:text-red-600 cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="border-t border-gray-200 mt-10 pt-4">
        <p className="text-center text-sm">
          PT. Inditrans Satu Nusantara © 2024 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
