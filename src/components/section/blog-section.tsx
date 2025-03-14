import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

type BlogPostType = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
};

const blogPosts: BlogPostType[] = [
  {
    id: 1,
    title: "Teknologi Canggih",
    description:
      "PT Inditrans memanfaatkan teknologi umum dalam logistik seperti sistem manajemen rantai pasok, otomatisasi gudang, dan pelacakan real-time. Teknologi ini meningkatkan efisiensi operasional dan akurasi pengiriman.",
    imageUrl: "/images/blog-section/image.png",
    altText: "Teknologi Canggih"
  },
  {
    id: 2,
    title: "Warehouse Luas",
    description:
      "PT Inditrans memiliki warehouse luas dengan kapasitas besar untuk penyimpanan berbagai jenis barang. Fasilitas ini didukung sistem manajemen modern untuk memastikan pengelolaan stok yang efisien. Lokasinya strategis untuk mempercepat distribusi.",
    imageUrl: "/images/blog-section/image-1.png",
    altText: "Warehouse Luas"
  },
  {
    id: 3,
    title: "Fast Delivery & Moving",
    description:
      "PT Inditrans menawarkan layanan Fast Delivery & Moving dengan jaminan pengiriman cepat dan aman. Didukung armada modern dan sistem pelacakan real-time, proses pemindahan barang jadi lebih efisien. Layanan ini memastikan kepuasan pelanggan maksimal.     ",
    imageUrl: "/images/blog-section/image-2.jpeg",
    altText: "Pelayanan Terbaik"
  }
];

const BlogSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="py-52 mx-auto text-center" id="ourOffice">
      {/* Title Section */}
      <h1 className="text-[2rem] font-semibold text-gray-800 dark:text-white">
        {t("title.blog")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        {t("title.blog-sub")}
      </p>

      {/* Blog Posts */}
      <section className="bg-white dark:bg-gray-900 py-10">
        <div className="px-6 mx-auto w-4/5">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`mt-8 lg:-mx-6 lg:flex lg:items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="relative w-full lg:w-1/2 h-72 lg:h-96 rounded-xl overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.altText}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                  unoptimized
                />
              </div>
              <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 text-left">
                <a
                  href="#"
                  className="block text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
                >
                  {post.title}
                </a>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-base">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
