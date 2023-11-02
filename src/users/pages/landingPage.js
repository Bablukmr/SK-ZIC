import { useState, useEffect } from "react";
import axios from "axios";
export default function LandingPage() {
  const [promotionData, setPromotionData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/qr/promotion-list")
      .then((d) => {
        console.log(d.data);
        setPromotionData(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  return (
    <div className="flex items-center justify-center h-[2000px]">
      <div className="w-[90%] mt-[50px] gap-y-6 gap-x-4 grid grid-cols-4">
        {promotionData.map((reward) => (
          <div
            key={reward.id}
            className="p-2 flex flex-col items-center justify-center gap-1 rounded-md"
          >
            <div className="w-full h-[120px] rounded-t-md">
              <img
                src={reward.img}
                height={120}
                width={"100%"}
                className="rounded-t-md "
              />
              {/* border-0 w-full h-full  border-none */}
            </div>

            <div className="flex flex-col w-full gap-y-1 my-1 items-start justify-start">
              <p className="w-full text-base font-medium m-0 p-0">
                {reward.title}
              </p>
              <p className="w-full text-[#979797] text-xs m-0 p-0">
                {reward.des}
              </p>
              <p className="w-full text-base font-medium m-0 p-0">
                {reward.redeem_points}
              </p>
            </div>
            <button className=" w-full bg-[#23262d] text-white py-2 cursor-pointer rounded-md">
              Redeem
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
