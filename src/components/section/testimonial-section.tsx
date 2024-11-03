import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { WhatsappIcon } from "../icon";

type TestimonialType = {
  id: number;
  name: string;
  position: string;
  company: string;
  imageUrl: string;
  feedback: string;
  rating: number;
};

type ClientLogoType = {
  id: number;
  imageUrl: string;
  altText: string;
};

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Customer Name",
    position: "Position",
    company: "Company Name",
    imageUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    feedback:
      "A customer testimonial that highlights features and answers potential customer doubts about your product or service.",
    rating: 5
  },
  {
    id: 2,
    name: "Customer Name",
    position: "Position",
    company: "Company Name",
    imageUrl:
      "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    feedback:
      "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.",
    rating: 5
  },
  {
    id: 3,
    name: "Customer Name",
    position: "Position",
    company: "Company Name",
    imageUrl:
      "https://images.unsplash.com/photo-1547721064-da6cfb341d50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    feedback:
      "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.",
    rating: 5
  }
];

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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <section className="w-full bg-[#0F1010]">
      <div className="container px-6 py-10 mx-auto">
        <div className="pt-[70px] text-center">
          <h1 className="text-white text-5xl font-medium">
            Customer testimonials
          </h1>
          <p className="mt-3 text-white font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 lg:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div className="p-8 border rounded-lg" key={testimonial.id}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500 text-xl" />
                ))}
              </div>

              <p className="text-white leading-loose">
                “A customer testimonial that highlights features and answers
                potential customer doubts about your product or service.
                Showcase testimonials from a similar demographic to your
                customers.”
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <div className="relative mx-2 w-14 h-14 rounded-full ring-4 ring-gray-300 dark:ring-gray-700 overflow-hidden shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt="Robert"
                    layout="fill"
                    objectFit="cover" // Menyesuaikan agar gambar pas dengan container
                  />
                </div>

                <div className="mx-2">
                  <h1 className="font-semibold text-white">Customer Name</h1>
                  <span className="text-sm text-white">
                    Position, Company Name
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <div>
        <div className="pt-10">
          <h2 className="text-white text-center text-2xl">Our Client</h2>
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
              />
            ))}
          </div>
        </div>
      </div>

      {/* background image */}
      <div
        className="w-full h-[600px] content-center"
        style={{
          backgroundImage: `url('${baseUrl}/images/shipping-background.png')`
        }}
      >
        <div className="text-center pt-10 ">
          <h1 className="font-bold text-white text-3xl sm:text-4xl lg:text-6xl">
            Siap Kirim Paket dengan
          </h1>
          <h1 className="font-bold text-white text-3xl sm:text-4xl lg:text-6xl mt-6">
            Layanan Baru Kami?
          </h1>
          <p className="text-white text-sm sm:text-2xl mt-6">
            Jangkau seluruh Indonesia dengan tarif
          </p>
          <p className="text-white text-sm sm:text-2xl mt-2">
            hemat dan pengiriman prioritas
          </p>
          <div className="flex justify-center ">
            <Link
              href="#"
              className="flex flex-row px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-[#EDAF05] rounded-full hover:bg-[#edb705d7] lg:w-40"
            >
              <WhatsappIcon className="w-5 h-5 mr-2" />
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
