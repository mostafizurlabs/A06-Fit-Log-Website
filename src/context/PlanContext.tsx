
"use client";

import { PlanContextType, PlanWorkout, Workout } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [planList, setPlanList] = useState<PlanWorkout[]>([]);
  const [savedList, setSavedList] = useState<Workout[]>([]);

  // Add Workout to Plan
  const addToPlan = (workout: Workout) => {
  if (
  planList.some((item) => item.id === workout.id && !item.isDone)
) {
  toast.error("Already in your plan");
  return;
}

    if (planList.length >= 5) {
      toast.error("Your plan is full");
      return;
    }

    setPlanList([...planList, { ...workout, isDone: false }]);
    toast.success("Added to your plan");
  };

  // Add Workout to Saved List
  const addToSaved = (workout: Workout) => {
    if (savedList.some((item) => item.id === workout.id)) {
      toast.error("Already in your saved list");
      return;
    }

    setSavedList([...savedList, workout]);
    toast.success("Added to your saved list");
  };

  // Remove From Plan
  const removeFromPlan = (id: number) => {
    setPlanList(planList.filter((item) => item.id !== id));
    toast.success("Workout removed from your plan");
  };

  // Remove From Saved
  const removeFromSaved = (id: number) => {
    setSavedList(savedList.filter((item) => item.id !== id));
    toast.success("Workout removed from your saved list");
  };

  // Mark Workout as Done
  const markAsDone = (id: number) => {
    setPlanList(
      planList.map((item) =>
        item.id === id ? { ...item, isDone: true } : item
      )
    );
    toast.success("Workout completed!");
  };

  const value: PlanContextType = {
    planList,
    savedList,
    addToPlan,
    addToSaved,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  };

  return (
    <PlanContext.Provider value={value}>
      {children}
    </PlanContext.Provider>
  );
}

export function usePlanContext() {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error(
      "Please make sure the app is wrapped with the correct context provider."
    );
  }

  return context;
}
