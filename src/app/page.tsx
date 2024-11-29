"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TeamSection from "@/components/section/team-section";
import BlogSection from "@/components/section/blog-section";
import TestimonialSection from "@/components/section/testimonial-section";
import HeroesSection from "@/components/section/heroes-section";
import Link from "next/link";
import { WhatsappIcon } from "@/components/icon";
import "../libs/locale/index";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <HeroesSection />
      <BlogSection />
      <TeamSection />
      <TestimonialSection />
      <section id="services">
        <Footer />
      </section>

      {/* Sticky "Hubungi Kami" Button */}
      <div className="fixed bottom-4 right-48 z-50">
        <Link
          href="#"
          className="flex flex-row items-center px-5 py-2 text-sm text-white bg-[#002C4A] rounded-full hover:bg-[#002c4ae1] transition-colors"
        >
          <WhatsappIcon className="w-5 h-5 mr-2" />
          {t("navbar.contactUs")}
        </Link>
      </div>
    </>
  );
}
