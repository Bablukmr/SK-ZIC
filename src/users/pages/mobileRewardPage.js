import React from "react";
import { useNavigate } from "react-router-dom";

function MobileRewardsPage() {
  const rewardData = [
    {
      id: 1,
      title: "reward1",
      description: "this is reward 1",
      points: "67 points",
    },
    {
      id: 2,
      title: "reward2",
      description: "this is reward 2",
      points: "68 points",
    },
    {
      id: 3,
      title: "reward3",
      description: "this is reward 3",
      points: "69 points",
    },
    {
      id: 4,
      title: "reward4",
      description: "this is reward 4",
      points: "70 points",
    },
    {
      id: 5,
      title: "reward5",
      description: "this is reward 5",
      points: "71 points",
    },
    {
      id: 6,
      title: "reward6",
      description: "this is reward 6",
      points: "72 points",
    },
    {
      id: 7,
      title: "reward7",
      description: "this is reward 7",
      points: "73 points",
    },
    {
      id: 8,
      title: "reward8",
      description: "this is reward 8",
      points: "74 points",
    },
    {
      id: 9,
      title: "reward9",
      description: "this is reward 9",
      points: "75 points",
    },
    {
      id: 10,
      title: "reward10",
      description: "this is reward 10",
      points: "76 points",
    },
  ];
  const navigate = useNavigate();
  return (
    <div>
      <div className="m-8">
        <svg
          onClick={() => navigate("/")}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </div>

      <div className="w-[90%] ml-[5%] gap-4 grid grid-cols-2">
        {rewardData.map((reward) => (
          <div
            key={reward.id}
            className="border-2 p-2 flex flex-col items-center justify-center gap-2 rounded-md"
          >
            <div className="bg-slate-200 w-full h-[70px]"> </div>
            <p className="w-full text-base font-medium">{reward.title}</p>
            <p className="w-full text-[#979797] text-xs">
              {reward.description}
            </p>
            <p className="w-full text-base font-medium">{reward.points}</p>
            <button className=" w-full bg-[#333333] text-white px-10 py-2 rounded-md">
              Redeem
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobileRewardsPage;
