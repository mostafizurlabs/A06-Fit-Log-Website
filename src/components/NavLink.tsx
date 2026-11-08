"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  const pathname = usePathname();

  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
   className={`rounded-md px-3 py-2 font-medium transition-colors ${
  isActive
    ? "lg:bg-[#1A2312] lg:text-[#C2F800] text-gray-400"
    : "text-gray-400"
}`}
    >
      {children}
    </Link>
  );
};
export default NavLink;
