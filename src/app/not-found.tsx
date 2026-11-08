import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] bg-[#0B0D0F] flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-extrabold text-[#C6FF00]">404</h1>

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
};

export default NotFound;
