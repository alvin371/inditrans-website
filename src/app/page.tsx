"use client";
import Navbar from "@/components/navbar";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import Image from "next/image";
import { wrap } from "@motionone/utils";
import Footer from "@/components/footer";
import { FaStar } from 'react-icons/fa';

function ParallaxImageRow({
  images,
  baseVelocity
}: {
  images: string[];
  baseVelocity: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, 100, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="my-5 overflow-hidden ">
      <motion.div className="flex flex-row space-x-5 " style={{ x }}>
        {images.map((src, index) => (
          <Image
            key={index}
            width={1920}
            height={1080}
            className="object-cover w-full h-48 rounded-xl lg:w-full"
            src={src}
            alt={`Illustrative Image ${index + 1}`}
          />
        ))}
      </motion.div>
    </div>
  );
}
export default function Home() {
  const imageSrcs = [
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
  ];
  return (
    <>
      <Navbar />
      {/* Section Content */}
      <div className="container py-10 mx-auto text-center">
        <div className="flex flex-col mx-auto w-[660px]">
          <Image
            width={100}
            height={100}
            src={"/inditrans-logo.png"}
            alt="Logo"
            className="justify-center mx-auto"
          />
          <h1 className="inline-block text-[#002C4A] text-[3rem] font-bold w-full text-center">
            PT. Inditrans Satu Nusantara
          </h1>

          <h1 className="text-center text-[2rem] font-semibold">
            Packing & Moving
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex flex-row justify-center mt-10">
          <Image
            width={1920}
            height={1080}
            className="object-cover w-full h-96 rounded-xl lg:w-full"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            alt="Illustrative Image"
          />
        </div>
      </div>
      {/*image section*/}
      <div className="bg-[#D6E8CA]">
        <div className="flex flex-col justify-center mt-10 py-20">
          <h1 className="text-center text-[2rem] font-semibold">
            Proses Packing Unggul & Keamanan Terjamin
          </h1>
          <h1 className="text-center text-xl">
            Lebih dari sekadar logistik, kami menyediakan pengiriman yang andal
            dan efisien dengan solusi teknologi canggih.
          </h1>
        </div>

        {/* Move Left to Right */}
        <ParallaxImageRow images={imageSrcs} baseVelocity={-5} />

        {/* Move Right to Left */}
        <ParallaxImageRow images={imageSrcs} baseVelocity={5} />

        <div className="mt-10 pb-10">
          <Image
            width={1920}
            height={1080}
            className="object-cover w-full h-96 rounded-xl lg:w-full"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            alt="Illustrative Image"
          />
        </div>
      </div>
      {/* Blog Content */}
      <div className="container py-10 mx-auto text-center">
        <h1 className="text-[2rem] font-semibold">
          Fasilitas Terbaik untuk Layanan Tanpa Hambatan
        </h1>
        <h1 className="text-xl">
          Mendukung kebutuhan Anda dengan infrastruktur yang Mumpuni dan
          Pelayanan berkualitas tinggi
        </h1>
        <section className="bg-white dark:bg-gray-900">
          <div className="px-6 py-10 mx-auto">
            <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
              <Image
                width={1920}
                height={1080}
                className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Blog preview"
              />

              <div className="text-left mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
                <a
                  href="#"
                  className="block text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
                >
                  Teknologi Canggih
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  PT Inditrans memanfaatkan teknologi umum dalam logistik
                  seperti sistem manajemen rantai pasok, otomatisasi gudang, dan
                  pelacakan real-time. Teknologi ini meningkatkan efisiensi
                  operasional dan akurasi pengiriman.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900">
          <div className="px-6 py-10 mx-auto">
            <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
              <div className="text-left mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
                <a
                  href="#"
                  className="block text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
                >
                  Teknologi Canggih
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  PT Inditrans memanfaatkan teknologi umum dalam logistik
                  seperti sistem manajemen rantai pasok, otomatisasi gudang, dan
                  pelacakan real-time. Teknologi ini meningkatkan efisiensi
                  operasional dan akurasi pengiriman.
                </p>
              </div>
              <Image
                width={1920}
                height={1080}
                className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Blog preview"
              />
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900">
          <div className="px-6 py-10 mx-auto">
            <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
              <Image
                width={1920}
                height={1080}
                className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Blog preview"
              />

              <div className="text-left mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
                <a
                  href="#"
                  className="block text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
                >
                  Teknologi Canggih
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  PT Inditrans memanfaatkan teknologi umum dalam logistik
                  seperti sistem manajemen rantai pasok, otomatisasi gudang, dan
                  pelacakan real-time. Teknologi ini meningkatkan efisiensi
                  operasional dan akurasi pengiriman.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Customer testimonials  */}
      <section className="w-full bg-[#0F1010]">
        <div className="container px-6 py-10 mx-auto">
            <div className="pt-[70px] text-center">
            <h1 className="text-white text-5xl font-medium">Customer testimonials</h1>
            <p className="mt-3 text-white font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
            <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 lg:grid-cols-2 xl:grid-cols-3">
              {/* Testimonial Card 1 */}
              <div className="p-8 border rounded-lg ">
                <div className="flex mb-4">
                  {/* Menampilkan 5 ikon bintang */}
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500 text-xl" />
                  ))}
                </div>
            
                <p className="text-white leading-loose">
                  “A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.”
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
                    <span className="text-sm text-white">Position, Company Name</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="p-8 border rounded-lg">
                  <div className="flex mb-4">
                  {/* Menampilkan 5 ikon bintang */}
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500 text-xl" />
                  ))}
                </div>                    
                <p className="leading-loose text-white ">
                  “A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.”
                </p>

                <div className="flex items-center mt-8 -mx-2">
                  <div className="relative mx-2 w-14 h-14 rounded-full ring-4 ring-gray-300 dark:ring-gray-700 overflow-hidden shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                      alt="Jeny Doe"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="mx-2">
                    <h1 className="font-semibold text-white">Customer Name</h1>
                    <span className="text-sm text-white">Position, Company Name</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="p-8 border rounded-l">
                <div className="flex mb-4">
                  {/* Menampilkan 5 ikon bintang */}
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500 text-xl" />
                  ))}
                </div> 
                <p className="leading-loose text-white ">
                  “A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.”
                </p>

                <div className="flex items-center mt-8 -mx-2">
                  <div className="relative mx-2 w-14 h-14 rounded-full ring-4 ring-gray-300 dark:ring-gray-700 overflow-hidden shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt="Ema Watson"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="mx-2">
                    <h1 className="font-semibold text-white">Customer Name</h1>
                    <span className="text-sm text-white">Position, Company Name</span>
                  </div>
                </div>
              </div>
            </section>
        </div>
        <div>
          <div className="pt-10">
            <h2 className="text-white text-center text-2xl">Our Client</h2>
          </div>
          <div className="pt-14">
            {/* 5 logo */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
