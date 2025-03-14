import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame
} from "framer-motion";
import Image from "next/image";
import { wrap } from "@motionone/utils";
import { useTranslation } from "react-i18next";

// Updated MarqueeImageRow function
const MarqueeImageRow = ({
  images,
  baseVelocity
}: {
  images: string[];
  baseVelocity: number;
}) => {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(-50, 50, v)}%`);

  useAnimationFrame((t, delta) => {
    const moveBy = baseVelocity * (delta / 8000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden">
      <motion.div className="flex flex-row space-x-5" style={{ x }}>
        {images.concat(images).map((src, index) => (
          <Image
            key={index}
            width={1920}
            height={1080}
            className="object-cover w-full h-48 rounded-xl"
            src={src}
            alt={`Marquee Image ${index + 1}`}
            unoptimized
          />
        ))}
      </motion.div>
    </div>
  );
};

const HeroesSection = () => {
  const imageSrcs = [
    "/images/heroes-section/image-1.jpeg",
    "/images/heroes-section/image-2.jpeg",
    "/images/heroes-section/image-3.jpeg",
    "/images/heroes-section/image-4.jpeg",
    "/images/heroes-section/image-5.jpeg",
    "/images/heroes-section/image-6.jpeg",
    "/images/heroes-section/image-7.jpeg"
  ];
  const imageSrcs2 = [
    "/images/heroes-section/image-8.jpeg",
    "/images/heroes-section/image-9.jpeg",
    "/images/heroes-section/image-10.jpeg",
    "/images/heroes-section/image-11.jpeg",
    "/images/heroes-section/image-12.jpeg",
    "/images/heroes-section/image-13.jpeg"
  ];

  const { t } = useTranslation();

  return (
    <>
      {/* Section Content */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/background-heroes.jpg"
            alt="Transportation Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            unoptimized
          />
        </div>

        {/* Diagonal Overlay */}
        <div
          className="absolute inset-0 bg-[#D6E8CA] opacity-50"
          style={{
            clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)"
          }}
        />

        <div className="relative h-full container mx-auto px-4 flex items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-white pr-4">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional Packing & Moving
            </h1>
          </div>

          {/* Right Content */}
          <div className="hidden lg:block w-1/2 pl-20">
            <Image
              width={1000}
              height={1000}
              src={"/images/Inditrans logo.png"}
              alt="Logo"
              className="justify-center mx-auto"
              unoptimized
            />
          </div>
        </div>
      </section>
      <div className="container pb-24 mx-auto text-center" id="home">
        <div className="flex flex-col mx-auto lg:w-[660px] w-full space-y-4"></div>

        {/* Video Section */}
        <div className="flex flex-col mx-auto space-y-10 mt-10">
          <h1 className="inline-block text-[#002C4A] text-3xl lg:text-[3rem] font-bold w-full text-center">
            Pusing Mau Pindahan?
          </h1>
          <iframe
            src="https://drive.google.com/file/d/1A5ZE3nFWWZIon-ra8hh6Judd4fmrgTY5/preview?rel=0&amp"
            width="1080"
            height="720"
            allow="autoplay; encrypted-media"
            className="w-full max-w-screen-xl rounded-lg shadow-lg mx-auto"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Image Carousel Section */}
      <section className="bg-[#D6E8CA] py-28" id="aboutUs">
        <div className="flex flex-col justify-center mt-14 py-20">
          <h1 className="text-center text-[2rem] font-semibold dark:text-white">
            {t("title.heroes")}
          </h1>
          <h1 className="text-center text-xl dark:text-white">
            {t("title.heroes-sub")}
          </h1>
        </div>

        {/* Marquee Effect: Left to Right */}
        <MarqueeImageRow images={imageSrcs} baseVelocity={-50} />

        {/* Marquee Effect: Right to Left */}
        <MarqueeImageRow images={imageSrcs2} baseVelocity={50} />

        <div className="relative mt-10 pb-10">
          <h1 className="absolute lg:top-60 md:top-10 left-1/2 transform -translate-x-1/2 text-center lg:text-[2rem] font-semibold text-[#002C4A] z-10">
            Crew Professional & Energic
          </h1>
          <Image
            width={1920}
            height={1080}
            className="object-cover w-full h-auto lg:w-full relative"
            src="/images/gallery-section/image-1.png"
            alt="Illustrative Image"
            unoptimized
          />
        </div>
      </section>
    </>
  );
};

export default HeroesSection;
