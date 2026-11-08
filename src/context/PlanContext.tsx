
"use client";

import { PlanContextType, PlanWorkout, Workout } from "@/types";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import toast from "react-hot-toast";

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [planList, setPlanList] = useState<PlanWorkout[]>([]);
  const [savedList, setSavedList] = useState<Workout[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
  const savedPlan = localStorage.getItem("fitlog-plan");
  const savedWorkouts = localStorage.getItem("fitlog-saved");

  if (savedPlan) {
    setPlanList(JSON.parse(savedPlan));
  }

  if (savedWorkouts) {
    setSavedList(JSON.parse(savedWorkouts));
  }

  setIsHydrated(true);
}, []);
useEffect(() => {
  if (isHydrated) {
    localStorage.setItem("fitlog-plan", JSON.stringify(planList));
  }
}, [planList, isHydrated]);
useEffect(() => {
  if (isHydrated) {
    localStorage.setItem("fitlog-saved", JSON.stringify(savedList));
  }
}, [savedList, isHydrated]);
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


  const addToSaved = (workout: Workout) => {
    if (savedList.some((item) => item.id === workout.id)) {
      toast.error("Already in your saved list");
      return;
    }

    setSavedList([...savedList, workout]);
    toast.success("Added to your saved list");
  };


  const removeFromPlan = (id: number) => {
    setPlanList(planList.filter((item) => item.id !== id));
    toast.success("Workout removed from your plan");
  };

  const removeFromSaved = (id: number) => {
    setSavedList(savedList.filter((item) => item.id !== id));
    toast.success("Workout removed from your saved list");
  };


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
