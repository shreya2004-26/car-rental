import { pointsRemember } from "@/DB/pointsRemember";

const RememberPoints = () => {
  return (
    <div className="p-5 rounded-md border-2 border-gray-200 flex flex-col gap-5 shadow-md">
      <h2 className="text-xl font-semibold text-center">
        IMPORTANT POINTS TO REMEMBER
      </h2>
      <div className="flex flex-col">
        {pointsRemember.map((curr, index) => {
          return (
            <div
              className="grid grid-cols-2 items-center border-b-[1px] border-gray-100 py-3"
              key={index}
            >
              <h2 className="text-base font-medium">{curr.title}:</h2>
              <h2 className="text-sm font-normal">{curr.value}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RememberPoints;
