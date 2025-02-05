import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

type ClientLogoType = {
  id: number;
  imageUrl: string;
  altText: string;
};

const clientLogos: ClientLogoType[] = [
  { id: 1, imageUrl: "/images/softext-logo.png", altText: "Softext Indonesia" },
  {
    id: 2,
    imageUrl: "/images/mayora-logo.png",
    altText: "PT Mayora Indah Tbk"
  },
  {
    id: 3,
    imageUrl: "/images/santafe-logo.png",
    altText: "Santa Fe Relocation"
  },
  {
    id: 4,
    imageUrl: "/images/cocacola-logo.png",
    altText: "The Coca-Cola Company"
  },
  { id: 5, imageUrl: "/images/telkom-logo.png", altText: "PT Telkom Akses" }
];

const TestimonialSection: React.FC = () => {
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const { t } = useTranslation();
  return (
    <section className="w-full bg-[#0F1010]">
      <div className="container px-6 py-10 mx-auto">
        <div className="pt-[70px] text-center">
          <h1 className="text-white text-5xl font-medium">
            {t("title.testimonial")}
          </h1>
          <p className="mt-3 text-white font-medium">
            {t("title.testimonial-sub")}
          </p>
        </div>
        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 lg:grid-cols-1 xl:grid-cols-1">
          <iframe
            src="https://drive.google.com/file/d/1K8hqXjm2PXGncsnJ5GJjSjwiMhNXl9jy/preview?rel=0&amp"
            width="408"
            height="720"
            allow="autoplay; encrypted-media"
            className="w-[408px] max-w-screen-xl rounded-lg shadow-lg mx-auto"
            allowFullScreen
          ></iframe>
        </section>
      </div>
      <div>
        <div className="pt-10">
          <h2 className="text-white text-center text-2xl">
            {t("title.client")}
          </h2>
        </div>
        <div className="py-14 container px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 place-items-center gap-4">
            {clientLogos.map((logo) => (
              <Image
                key={logo.id}
                className="md:col-span-2 lg:col-span-1"
                width={254}
                height={120}
                src={logo.imageUrl}
                alt={logo.altText}
                unoptimized
              />
            ))}
          </div>
        </div>
      </div>

      {/* background image */}
      <div
        className="w-full h-[600px] content-center"
        style={{
          backgroundImage: `url('https://client.inditrans.co.id/images/shipping-background.png')`
        }}
      >
        <div className="text-center pt-10 ">
          <h1 className="font-bold text-white text-3xl sm:text-4xl lg:text-6xl justify-center w-1/2 mx-auto">
            {t("title.cta")}
          </h1>
          <p className="text-white text-sm sm:text-2xl mt-6">
            {t("title.cta-sub")}
          </p>
          <div className="flex justify-center ">
            <p
              onClick={() => {
                window.open(
                  "https://wa.me/6281214502716?text=Hi, We have plan to move and need some advise.",
                  "_blank"
                );
              }}
              className="cursor-pointer mt-10"
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
      </div>
    </section>
  );
};

export default TestimonialSection;
