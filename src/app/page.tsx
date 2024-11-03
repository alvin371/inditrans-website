"use client";
import Navbar from "@/components/navbar";

import Footer from "@/components/footer";
import TeamSection from "@/components/section/team-section";
import BlogSection from "@/components/section/blog-section";
import TestimonialSection from "@/components/section/testimonial-section";
import HeroesSection from "@/components/section/heroes-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroesSection />
      {/* Blog Content */}
      <BlogSection />
      {/* Gallery Section */}
      <TeamSection />

      {/* Customer testimonials  */}
      <TestimonialSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
