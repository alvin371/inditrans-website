import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const TeamSection = () => {
  const images = [
    {
      src: "/images/gallery-section/image.png",
      alt: "Tim profesional bekerja di kantor"
    },
    {
      src: "/images/gallery-section/image-1.png",
      alt: "Foto bersama tim di lokasi kerja"
    },
    {
      src: "/images/gallery-section/image-2.png",
      alt: "Pekerja sedang mengecek dokumen"
    },
    {
      src: "/images/gallery-section/image-3.png",
      alt: "Diskusi antar pekerja di gudang"
    },
    {
      src: "/images/gallery-section/image-4.jpg",
      alt: "Koordinasi tim di gudang"
    },
    {
      src: "/images/gallery-section/image-5.png",
      alt: "Pekerja wanita sedang bekerja di komputer"
    }
  ];
  const armadaImages = [
    {
      src: "/images/gallery-section/armada-1.jpeg",
      alt: "Armada 1"
    },
    {
      src: "/images/gallery-section/armada-2.jpeg",
      alt: "Armada 2"
    },
    {
      src: "/images/gallery-section/armada-3.jpeg",
      alt: "Armada 3"
    }
  ];
  const { t } = useTranslation();
  return (
    <div className="bg-[#F6FAF3] py-10">
      <div className="flex flex-col justify-center mt-10 py-20">
        <h1 className="text-center text-[2rem] font-semibold dark:text-white">
          {t("title.team")}
        </h1>
        <h1 className="text-center text-xl w-3/5 mx-auto dark:text-white">
          {t("title.team-sub")}
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-full w-10/12 mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-72 rounded-lg overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority={index < 3}
              unoptimized
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center py-10">
        <div className="flex flex-col justify-center py-10">
          <h1 className="text-center text-[2rem] font-semibold">Armada</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-full w-10/12 mx-auto">
        {armadaImages.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-72 rounded-lg overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority={index < 3}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
