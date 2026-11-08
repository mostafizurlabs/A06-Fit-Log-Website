import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import logo from "@/assets/logo.png";
import Image from "next/image";
import NavbarButtons from "./NavbarButtons";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink href={"/"}>Workouts</NavLink>
      </li>
      <li>
        <NavLink href={"/my-plan"}>My Plan</NavLink>
      </li>
    </>
  );

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#0D0D10] shadow-sm">
      <div className="navbar container mx-auto min-h-16 bg-[#0D0D10] px-3 shadow-sm sm:px-5 lg:px-8">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
             className="menu menu-sm dropdown-content bg-[#0D0D10] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>


          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="FitLog Logo"
              width={40}
              height={40}
              priority
            />

            <span
              className={`${oswald.className} whitespace-nowrap text-[34px] font-medium tracking-[1px] leading-none`}
            >
              FITLOG
            </span>
          </Link>
        </div>


        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>


        <div className="navbar-end">
          <NavbarButtons />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
