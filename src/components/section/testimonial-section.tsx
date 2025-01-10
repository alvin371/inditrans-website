import React from "react";
import Image from "next/image";
import { WhatsappIcon } from "../icon";
import { useTranslation } from "react-i18next";

// type TestimonialType = {
//   id: number;
//   name: string;
//   position: string;
//   company: string;
//   imageUrl: string;
//   feedback: string;
//   rating: number;
// };

type ClientLogoType = {
  id: number;
  imageUrl: string;
  altText: string;
};

// const testimonials: TestimonialType[] = [
//   {
//     id: 1,
//     name: "Customer Name",
//     position: "Position",
//     company: "Company Name",
//     imageUrl:
//       "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
//     feedback:
//       "A customer testimonial that highlights features and answers potential customer doubts about your product or service.",
//     rating: 5
//   },
//   {
//     id: 2,
//     name: "Customer Name",
//     position: "Position",
//     company: "Company Name",
//     imageUrl:
//       "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//     feedback:
//       "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.",
//     rating: 5
//   },
//   {
//     id: 3,
//     name: "Customer Name",
//     position: "Position",
//     company: "Company Name",
//     imageUrl:
//       "https://images.unsplash.com/photo-1547721064-da6cfb341d50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
//     feedback:
//       "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.",
//     rating: 5
//   }
// ];

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
                window.open("https://wa.me/6281214502716", "_blank");
              }}
              className="flex flex-row px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-[#EDAF05] rounded-full hover:bg-[#edb705d7] lg:w-40"
            >
              <WhatsappIcon className="w-5 h-5 mr-2" />
              {/* {t("navbar.contactUs")} */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
