export const instant = false;
import Image from "next/image";
import Link from "next/link";
import { getSingleSection } from "@/utils/api";
import React from "react";
import DetailsPageButton from "@/components/DetailsPageButton";

const WorkoutDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const data = await getSingleSection(id);

  const workout = data?.data || data;

  if (!workout) {
    return (
      <div className="min-h-screen bg-[#0B0D0F] flex items-center justify-center px-5">
        <div className="text-center max-w-md">
          <h1 className="text-7xl font-extrabold text-white">
  404
</h1>

          <h2 className="text-2xl font-bold text-white mt-5">
            Workout Not Found!
          </h2>

          <p className="text-gray-400 mt-3 leading-7">
            Sorry, we couldn't find the workout you're looking for. It may have
            been removed or the link is incorrect.
          </p>

          <Link
            href="/"
            className="inline-block mt-7 bg-[#C6FF00] text-black font-bold px-7 py-3 rounded-lg hover:bg-[#b4e600] transition"
          >
            BACK TO WORKOUTS
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0D0F] text-white px-5 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

  <div>
  {workout.image ? (
    <Image
      src={workout.image}
      alt={workout.name}
      width={600}
      height={800}
      className="w-full h-[400px] md:h-full min-h-[400px] object-cover rounded-xl"
    />
  ) : (
    <div className="flex h-[400px] items-center justify-center rounded-xl bg-[#191C21] text-gray-400">
      No Image Available
    </div>
  )}
</div>


        <div>
          <p className="text-[#C6FF00] font-semibold tracking-widest">
            WORKOUT DETAILS
          </p>

          <h1 className="text-4xl font-bold mt-4">{workout.name}</h1>

          <p className="text-gray-400 mt-4 leading-7">{workout.description}</p>


          <div className="flex flex-wrap gap-2 mt-5">
            {workout.muscleGroups?.map((muscle: string) => (
              <span
                key={muscle}
                className="bg-[#C6FF00] text-black px-3 py-1 rounded-full text-sm"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Information Table */}
          <div className="mt-5 bg-[#191C21] border border-[#292D34] rounded-xl overflow-hidden">
            <div className="flex justify-between p-3 border-b border-[#292D34]">
              <span className="text-sm font-semibold">EQUIPMENT</span>
              <span>{workout.equipment}</span>
            </div>

            <div className="flex justify-between p-3 border-b border-[#292D34]">
              <span className="text-sm font-semibold">DIFFICULTY</span>
              <span>{workout.difficulty}</span>
            </div>

            <div className="flex justify-between p-3 border-b border-[#292D34]">
              <span className="text-sm font-semibold">SETS</span>
              <span>{workout.sets}</span>
            </div>

            <div className="flex justify-between p-3 border-b border-[#292D34]">
              <span className="text-sm font-semibold">REPS</span>
              <span>{workout.reps}</span>
            </div>

            <div className="flex justify-between p-3 border-b border-[#292D34]">
              <span className="text-sm font-semibold">DURATION</span>
              <span>{workout.duration} min</span>
            </div>

            <div className="flex justify-between p-3 border-b border-[#292D34]">
              <span className="text-sm font-semibold">CALORIES</span>
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex justify-between p-3">
              <span className="text-sm font-semibold">RATING</span>
              <span>{workout.rating}</span>
            </div>
          </div>


          <div className="mt-7">
            <h2 className="text-xl font-bold mb-4">INSTRUCTIONS</h2>

            {Array.isArray(workout.instructions) &&
            workout.instructions.length > 0 ? (
              <ol className="list-decimal list-inside space-y-3 text-gray-300 leading-6">
                {workout.instructions.map(
                  (instruction: string, index: number) => (
                    <li key={index}>{instruction}</li>
                  ),
                )}
              </ol>
            ) : (
              <p className="text-gray-400">No instructions available.</p>
            )}
          </div>



          <DetailsPageButton workout={workout} />
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
