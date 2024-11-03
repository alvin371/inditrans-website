// components/Footer.tsx
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col items-center lg:flex-row lg:justify-between">
        {/* Logo and Company Name */}
        <div className="flex flex-col align-middle items-center lg:items-start justify-center text-center">
          <Image
            src="/images/inditrans-logo.png" // Update the path to your logo image
            alt="Company Logo"
            width={20}
            height={20}
          />
          <h1 className="text-xl font-bold mt-2">
            PT. Inditrans Satu Nusantara
          </h1>
          <p className="text-gray-500">PACKING & DELIVERY</p>
        </div>

        {/* Office Locations */}
        <div className="mt-8 lg:mt-0 text-center lg:text-left">
          <h2 className="text-lg font-semibold">INDITRANS OFFICE</h2>
          <ul className="text-gray-700 mt-2">
            <li>Bali Office</li>
            <li>Bekasi Office</li>
            <li>Palembang Office</li>
            <li>Kupang Office</li>
            <li>Warehouse Kupang</li>
            <li>Surabaya Office</li>
            <li>Lombok</li>
          </ul>
        </div>

        {/* Contact Info and Social Media Icons */}
        <div className="mt-8 lg:mt-0 text-center lg:text-left">
          <h2 className="text-lg font-semibold">CONTACT</h2>
          <p className="text-gray-700 mt-2">Inditrans@inditrans.co.id</p>
          <div className="flex space-x-4 mt-4 justify-center lg:justify-start">
            <FaFacebookF className="text-gray-700 hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="text-gray-700 hover:text-pink-600 cursor-pointer" />
            <FaTwitter className="text-gray-700 hover:text-blue-400 cursor-pointer" />
            <FaLinkedinIn className="text-gray-700 hover:text-blue-700 cursor-pointer" />
            <FaYoutube className="text-gray-700 hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="border-t border-gray-200 mt-10 pt-4">
        <p className="text-center text-gray-500 text-sm">
          PT. Inditrans Satu Nusantara © 2024 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
