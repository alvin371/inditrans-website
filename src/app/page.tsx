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
      {/* Footer */}
      <Footer />
    </>
  );
}
