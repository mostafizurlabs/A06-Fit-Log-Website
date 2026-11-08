import MyPlan from "@/components/MyPlan";

const MyPlanPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-white">
        MY PLAN
      </h2>

      <p className="mt-2 text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <MyPlan />
    </div>
  );
};

export default MyPlanPage;