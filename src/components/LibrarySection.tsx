
"use client";

import { useEffect, useState } from "react";
import { Workout } from "@/types";
import { getLibrarySection } from "@/utils/api";
import WorkoutCard from "./WorkoutCard";

const LibrarySection = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getLibrarySection();
        
        setWorkouts(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load workouts. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

if (loading) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-[#C2F800]"></div>

      <p className="text-lg font-semibold text-[#C2F800]">
        Loading workouts...
      </p>
    </div>
  );
}

  if (error) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-lg font-semibold text-red-500">
          {error}
        </p>
      </div>
    );
  }

  return (
    <section
      id="library"
      className="w-full max-w-7xl mx-auto px-4 mt-12"
    >

      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase">
          THE LIBRARY
        </h2>

        <p className="text-sm sm:text-base text-gray-400 mt-2">
          Twelve lifts covering every major muscle group.
        </p>
      </div>


<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{workouts.length > 0 ? (
  workouts.map((workout) => (
    <WorkoutCard key={workout.id} workout={workout} />
  ))
) : (
  <p className="col-span-full py-10 text-center text-gray-400">
    No workouts available right now.
  </p>
)}
</div>
    </section>
  );
};

export default LibrarySection;

