
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});

const Footer = () => {
  return (
    <footer className="w-full bg-[#090B0C] px-4 py-6 sm:px-6 md:px-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-5 sm:flex-row sm:gap-4">


        <Link
          href="/"
          className="flex items-center justify-center gap-3"
        >
          <Image
            src={logo}
            alt="FitLog Logo"
            width={40}
            height={40}
          />

          <span
            className={`${oswald.className} whitespace-nowrap text-[30px] font-medium leading-none tracking-[1px] sm:text-[34px]`}
          >
            FITLOG
          </span>
        </Link>

        <p className="text-center text-xs leading-relaxed text-[#A1A1AA] sm:text-right sm:text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
