
"use client";

import { usePlanContext } from "@/context/PlanContext";
import { Workout } from "@/types";
import React from "react";

const DetailsPageButton = ({ workout }: { workout: Workout }) => {
  const {
    planList,
    savedList,
    addToPlan,
    addToSaved,
  } = usePlanContext();

  const isPlanFull = planList.length >= 5;
  const alreadyInPlan = planList.some((item) => item.id === workout.id);
  const alreadyInSaved = savedList.some((item) => item.id === workout.id);

  const handleAddToPlan = () => {
    addToPlan(workout);
  };

  const handleSavedForLater = () => {
    addToSaved(workout);
  };

  return (
    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={handleAddToPlan}
        disabled={isPlanFull && !alreadyInPlan}
        className="rounded-xl bg-[#C6FF00] px-5 py-3 font-bold text-black transition hover:bg-[#b4e600] disabled:cursor-not-allowed disabled:opacity-50"
      >
        ADD TO TODAY'S PLAN
      </button>

      <button
        type="button"
        onClick={handleSavedForLater}
        className="rounded-xl border border-white px-5 py-3 font-bold text-white"
      >
        SAVE FOR LATER
      </button>
    </div>
  );
};

export default DetailsPageButton;

