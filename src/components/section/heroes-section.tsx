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
import { useTranslation } from "react-i18next";

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
  const directionFactor = useRef(1);

  // Updated wrapping function to achieve a seamless loop effect
  const x = useTransform(baseX, (v) => `${wrap(-50, 50, v)}%`);

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
      <motion.div className="flex flex-row space-x-5" style={{ x }}>
        {[...images, ...images].map((src, index) => (
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

const HeroesSection = () => {
  const imageSrcs = [
    "/images/heroes-section/image.jpg",
    "/images/heroes-section/image-1.jpg",
    "/images/heroes-section/image-3.jpg",
    "/images/heroes-section/image-4.jpg",
    "/images/heroes-section/image-5.jpg",
    "/images/heroes-section/image-6.jpg",
    "/images/heroes-section/image-7.jpg",
    "/images/heroes-section/image-8.jpg"
  ];
  const imageSrcs2 = [
    "/images/heroes-section/image-9.jpg",
    "/images/heroes-section/image-10.jpg",
    "/images/heroes-section/image-11.jpg",
    "/images/heroes-section/image-12.jpg",
    "/images/heroes-section/image-13.jpg",
    "/images/heroes-section/image-14.jpg",
    "/images/heroes-section/image-15.jpg",
    "/images/heroes-section/image-16.jpg"
  ];

  const { t } = useTranslation();
  return (
    <>
      {/* Section Content */}

      <div className="container py-32 mx-auto text-center" id="home">
        <div className="flex flex-col mx-auto lg:w-[660px] w-full space-y-4">
          <Image
            width={100}
            height={100}
            src={"/images/inditrans-logo.png"}
            alt="Logo"
            className="justify-center mx-auto"
          />
          <h1 className="inline-block text-[#002C4A] text-3xl lg:text-[3rem] font-bold w-full text-center">
            PT. Inditrans Satu Nusantara
          </h1>

          <h1 className="text-center text-xl lg:text-[2rem] font-semibold">
            Packing & Moving
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex flex-row justify-center mt-10">
          <iframe
            src="https://drive.google.com/file/d/1A5ZE3nFWWZIon-ra8hh6Judd4fmrgTY5/preview?rel=0&amp"
            width="1080"
            height="720"
            allow="autoplay; encrypted-media"
            className="w-full max-w-screen-xl rounded-lg shadow-lg"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Image Carousel Section */}
      <section className="bg-[#D6E8CA] py-28" id="aboutUs">
        <div className="flex flex-col justify-center mt-14 py-20">
          <h1 className="text-center text-[2rem] font-semibold">
            {t("title.heroes")}
          </h1>
          <h1 className="text-center text-xl">{t("title.heroes-sub")}</h1>
        </div>

        {/* Move Left to Right */}
        <ParallaxImageRow images={imageSrcs} baseVelocity={-5} />

        {/* Move Right to Left */}
        <ParallaxImageRow images={imageSrcs2} baseVelocity={5} />

        <div className="mt-10 pb-10">
          <Image
            width={1920}
            height={1080}
            className="object-cover w-full h-auto lg:w-full"
            src="/images/gallery-section/image-1.png"
            alt="Illustrative Image"
          />
        </div>
      </section>
    </>
  );
};

export default HeroesSection;
