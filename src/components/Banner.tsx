import React from "react";
import Image from "next/image";
import banner from "@/assets/banner.png";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Banner = () => {
  return (
    <section className="px-4 py-10">
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 rounded-2xl border border-[#2A2A2A] bg-[#222630] px-6 py-12 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-16">
        {/* Text Section */}
        <div>
          <p className="mb-6 text-xs font-bold tracking-widest text-[#C2F800]">
            WORKOUT LIBRARY
          </p>

          <h1
            className={`${oswald.className} mb-6 text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl lg:text-6xl`}
          >
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mb-8 text-base leading-relaxed text-gray-400 lg:max-w-[480px]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <a
            href="#library"
            className="inline-block rounded-lg bg-[#C6FF00] px-6 py-3 font-bold text-black transition hover:bg-[#b4e600]"
          >
            BROWSE WORKOUTS
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src={banner}
            alt="Workout"
            width={500}
            height={400}
            priority
            className="h-auto w-full max-w-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
