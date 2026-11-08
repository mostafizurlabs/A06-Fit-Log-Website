"use client";
import { usePlanContext } from "@/context/PlanContext";
import Link from "next/link";

const NavbarButtons = () => {
  const { planList, savedList } = usePlanContext();

  return (
    <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">

      <Link
        href="/my-plan"
        className="group flex items-center gap-2 rounded-full text-sm font-medium text-[#A1A1AA] transition-all duration-300 hover:text-white sm:gap-3 sm:text-base lg:text-lg"
      >
        <span>Plan</span>

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C2F800] text-sm font-bold text-black shadow-[0_0_12px_rgba(194,248,0,0.15)] transition-transform duration-300 group-hover:scale-110 sm:h-9 sm:w-9 sm:text-base lg:h-10 lg:w-10">
          {planList.filter((item) => !item.isDone).length}
        </span>
      </Link>


      <Link
        href="/my-plan"
        className="group flex items-center gap-2 rounded-full text-sm font-medium text-[#A1A1AA] transition-all duration-300 hover:text-white sm:gap-3 sm:text-base lg:text-lg"
      >
        <span>Saved</span>

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#30343D] bg-[#181A1F] text-sm font-semibold text-[#D1D5DB] transition-all duration-300 group-hover:border-[#C2F800] group-hover:text-[#C2F800] sm:h-9 sm:w-9 sm:text-base lg:h-10 lg:w-10">
          {savedList.length}
        </span>
      </Link>

    </div>
  );
};

export default NavbarButtons;
