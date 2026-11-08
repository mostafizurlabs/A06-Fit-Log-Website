
import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types";
import { SiTinder } from "react-icons/si";
const WorkoutCard = ({ workout }: { workout: Workout }) => {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block h-full w-full"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#252830] bg-[#222630] transition duration-300 hover:-translate-y-1 hover:border-[#C6FF00]/50">


        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1A1D24] sm:aspect-[16/9]">
          <Image
            src={workout.image}
            alt={`${workout.name} workout`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-3 sm:p-4 lg:p-5">


          <div className="mb-3 flex flex-wrap gap-1.5 sm:gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={`${workout.id}-${muscle}`}
                className="rounded-full bg-[#C6FF00] px-2 py-1 text-[9px] font-bold uppercase text-black sm:text-[10px]"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h2 className="mb-2 line-clamp-2 text-sm font-bold uppercase text-white transition-colors duration-300 group-hover:text-[#C6FF00] sm:text-base">
            {workout.name}
          </h2>

          <p className="mb-4 line-clamp-1 text-xs text-[#A1A1AA] sm:mb-5 sm:text-sm">
            {workout.equipment}
          </p>

          <div className="mt-auto grid grid-cols-3 gap-1.5 border-t border-[#252830] pt-3 text-[#A0A4AD] sm:gap-2 sm:pt-4">
            <div className="min-w-0">
              <p className="text-[9px] text-[#777B85] sm:text-xs">
                Duration
              </p>
              <p className="mt-1 text-[10px] font-semibold text-white sm:text-sm">
                ◷ {workout.duration} min
              </p>
            </div>

            <div className="min-w-0">
              <p className="text-[9px] text-[#777B85] sm:text-xs">
                Calories
              </p>
              <p className="mt-1 text-[10px] font-semibold text-white sm:text-sm">
                <SiTinder className="inline text-[#C6FF00]" />{" "} {workout.caloriesBurned} kcal
              </p>
            </div>

            <div className="min-w-0">
              <p className="text-[9px] text-[#777B85] sm:text-xs">
                Rating
              </p>
              <p className="mt-1 text-[10px] font-semibold text-white sm:text-sm">
                <span className="text-[#C6FF00]">☆</span>{" "}
                {workout.rating}
              </p>
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
