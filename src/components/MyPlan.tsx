
"use client";

import { usePlanContext } from "@/context/PlanContext";
import Link from "next/link";
import React, { useState } from "react";

const MyPlan = () => {
  const {
    planList,
    savedList,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = usePlanContext();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  // Active Plan
  const activePlan = planList.filter((item) => !item.isDone);

  // Workout Statistics
  const exercises = activePlan.length;

  const minutes = activePlan.reduce(
    (total, item) => total + item.duration,
    0,
  );

  const calories = activePlan.reduce(
    (total, item) => total + item.caloriesBurned,
    0,
  );

  const currentList = activeTab === "plan" ? planList : savedList;

  const sortedList = [...currentList]
    .filter((workout) => {
      if (activeTab === "plan" && "isDone" in workout) {
        return !workout.isDone;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });

  const handleRemoveFromPlan = (id: number) => {
    removeFromPlan(id);
  };

  const handleRemoveFromSaved = (id: number) => {
    removeFromSaved(id);
  };

  const handleMarkAsDone = (id: number) => {
    markAsDone(id);
  };

  const renderTabContent = () => {
    if (sortedList.length === 0) {
      return (
        <div className="flex min-h-[280px] w-full flex-col items-center justify-center rounded-xl border border-dashed border-[#252932] bg-[#15171F] text-center">
          <h2 className="text-sm font-bold uppercase text-white">
            Nothing here yet
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="btn btn-sm mt-3 rounded-full border-none bg-[#C6FF00] px-5 text-black hover:bg-[#b5eb00]"
          >
            Go to workouts
          </Link>
        </div>
      );
    }

    return (
      <div className="flex w-full flex-col gap-4">
        {sortedList.map((workout) => (
          <div
            key={workout.id}
            className="flex min-h-[114px] w-full flex-col gap-3 rounded-xl border border-[#252932] bg-[#222730] p-3 sm:h-[114px] sm:flex-row sm:items-center sm:gap-4"
          >
            <div className="h-20 w-20 shrink-0">
              <img
                src={workout.image}
                alt={workout.name}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="truncate text-sm font-bold text-white">
                {workout.name}
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                {workout.difficulty}
              </p>

              <div className="mt-2 flex items-center gap-4 text-xs text-gray-300">
                <span>{workout.duration} min</span>
                <span>{workout.caloriesBurned} kcal</span>
                <span>⭐ {workout.rating}</span>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-3 sm:ml-6">
              <Link
                href={`/workout/${workout.id}`}
                className="btn btn-outline btn-xs rounded-full"
              >
                View Details
              </Link>

              {activeTab === "plan" && "isDone" in workout && (
                <button
                  type="button"
                  onClick={() => handleMarkAsDone(workout.id)}
                  className="btn btn-xs rounded-full border-none bg-[#C6FF00] text-black hover:bg-[#b5eb00]"
                >
                  ✓ Mark as Done
                </button>
              )}

              <button
                type="button"
                onClick={() =>
                  activeTab === "plan"
                    ? handleRemoveFromPlan(workout.id)
                    : handleRemoveFromSaved(workout.id)
                }
                className="btn btn-circle btn-xs border-none bg-transparent text-gray-300 shadow-none hover:bg-[#15171F] hover:text-white"
                aria-label="Remove workout"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-6 flex w-full flex-col gap-4">
      <div className="grid w-full grid-cols-3 rounded-xl border border-[#252932] bg-[#15171F]">
        <div className="stat">
          <div className="stat-title text-gray-400">Exercises</div>
          <div className="stat-value text-[#C6FF00]">{exercises}</div>
        </div>

        <div className="stat">
          <div className="stat-title text-gray-400">Minutes</div>
          <div className="stat-value text-white">{minutes}</div>
        </div>

        <div className="stat">
          <div className="stat-title text-gray-400">Calories</div>
          <div className="stat-value text-white">{calories}</div>
        </div>
      </div>

      <div className="mt-4 flex w-full flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs */}
          <div className="flex items-center gap-1 rounded-lg border border-[#252932] bg-[#171A22] p-1">
            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`rounded-md px-4 py-2 text-sm ${
                activeTab === "plan"
                  ? "bg-[#252932] text-white"
                  : "text-gray-400"
              }`}
            >
              Today's Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-4 py-2 text-sm ${
                activeTab === "saved"
                  ? "bg-[#252932] text-white"
                  : "text-gray-400"
              }`}
            >
              Saved
            </button>
          </div>

<div className="ml-auto flex h-[34px] w-fit items-center justify-end gap-2 sm:w-[147px] sm:gap-3">
  <span className="whitespace-nowrap text-[11px] text-gray-300">
    Sort By
  </span>

  <select
    value={sortBy}
    onChange={(e) =>
      setSortBy(
        e.target.value as "duration" | "calories" | "rating",
      )
    }
    className="select h-[28px] min-h-0 w-[110px] rounded-md border border-[#252932] bg-[#171A22] px-2 text-[11px] text-white sm:w-[82px]"
  >
    <option value="duration">Duration</option>
    <option value="calories">Calories</option>
    <option value="rating">Rating</option>
  </select>
</div>
        </div>

        <div className="w-full">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default MyPlan;

