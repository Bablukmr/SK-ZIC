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
    // <div className="flex items-center justify-center h-[2000px]">
    //   <div className="w-[90%] mt-[50px] gap-y-6 gap-x-4 grid grid-cols-4">
    //     {promotionData.map((reward) => (
    //       <div
    //         key={reward.id}
    //         className="p-2 flex flex-col items-center justify-center gap-1 rounded-md"
    //       >
    //         <div className="w-full h-[120px] rounded-t-md">
    //           <img
    //             src={reward.img}
    //             height={120}
    //             width={"100%"}
    //             className="rounded-t-md "
    //           />
    //           {/* border-0 w-full h-full  border-none */}
    //         </div>

    //         <div className="flex flex-col w-full gap-y-1 my-1 items-start justify-start">
    //           <p className="w-full text-base font-medium m-0 p-0">
    //             {reward.title}
    //           </p>
    //           <p className="w-full text-[#979797] text-xs m-0 p-0">
    //             {reward.des}
    //           </p>
    //           <p className="w-full text-base font-medium m-0 p-0">
    //             {reward.redeem_points}
    //           </p>
    //         </div>
    //         <button className=" w-full bg-[#23262d] text-white py-2 cursor-pointer rounded-md">
    //           Redeem
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div>
      {/* 1st */}

      <div className="w-full mt-[90px] py-[40px] md:py-[50px] xl:py-[80px] bg-[#EEEEEE] flex items-center justify-center">
        <div className="w-[90%] flex flex-col gap-2 md:flex-row">
          <div className="w-full md:w-[50%]  flex gap-4 flex-col items-start justify-center">
            <h1 className="leading-[40px] lg:leading-[80px] xl:leading-[120px] text-[40px] lg:text-[60px] xl:text-[80px] font-normal text-[#333333]">
              Slogan of The Company
            </h1>
            <p className="w-[90%] md:w-[60%] text-[#636363]">
              Stickers are components and pre-defined elements you can quickly
              copy and start using in your designs. Stickers.
            </p>
            <button className="text-white bg-[#333333] px-6 py-2 rounded-md">
              Register Now
            </button>
          </div>
          <div className="w-[50%] bg-[#EEEEEE] flex items-center justify-center">
            <h1>IMG</h1>
          </div>
        </div>
      </div>
      {/* Get Rewarded in 3 Simple Steps! */}
      <div className="w-full mt-[120px] flex flex-col items-center justify-center">
        <div className="w-[90%] flex flex-col gap-2 md:flex-row">
          <div className="md:w-[60%] w-full flex flex-col gap-3 md:gap-5">
            <h1 className="leading-[30px] mb-3 md:leading-[40px] lg:leading-[50px] xl:leading-[60px] text-[30px] lg:text-[40px] xl:text-[40px] font-normal text-[#333333]">
              Get Rewarded in 3 Simple Steps!
            </h1>
            <p className="xl:leading-[33px] text-[19px] md:text-[20px] xl:text-[22px] font-normal text-[#636363]">
              <span className="font-semibold text-[#333333]">Scan: </span>
              Snap the QR code, unlock rewards.
            </p>
            <p className="xl:leading-[33px] text-[19px] md:text-[20px] xl:text-[22px] font-normal text-[#636363]">
              <span className="font-semibold text-[#333333]">Earn: </span> Watch
              your points pile up with every scan.
            </p>
            <p className="xl:leading-[33px] text-[19px] md:text-[20px] xl:text-[22px] font-normal text-[#636363]">
              <span className="font-semibold text-[#333333]">Redeem: </span>{" "}
              Turn points into exciting rewards!
            </p>
            <p className="xl:leading-[33px] text-[19px] md:text-[20px] xl:text-[22px] font-normal text-[#636363]">
              Start scanning and earning today – it's your journey to rewards!
            </p>
          </div>
          <div className="md:w-[40%] bg-[#EEEEEE]  flex items-center justify-center">
            <h1>IMG</h1>
          </div>
        </div>
      </div>

      {/* rewards */}

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
                  alt=""
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
      {/* Branding & Promotions */}

      <div className="w-full mt-[120px] flex flex-col items-center justify-center">
        <div className="w-[90%] flex gap-2 flex-col items-center justify-center">
          <h1 className="leading-[33px] md:leading-[40px] lg:leading-[50px] xl:leading-[60px] text-[22px] lg:text-[40px] font-normal text-[#333333]">
            Branding & Promotions
          </h1>
          <p className="text-[#636363] w-[60%] md:w-[50%] xl:w-[40%] 2xl:w-[30%] text-center leading-[24px] md:leading-[33px] text-[16px] md:text-[22px] font-normal">
            Stickers are components and pre-defined elements you...
          </p>

          <div className="flex my-4 w-full items-center justify-center gap-9">
            <div className="w-[200px] h-[200px] bg-[#EEEEEE]"></div>
            <div className="w-[200px] h-[200px] bg-[#EEEEEE]"></div>
          </div>
        </div>
      </div>

      {/* add to home Screen */}

      <div className="w-full mt-[120px] flex flex-col  gap-4">
        <div className=" ml-[5%] ">
          <h1 className="w-[90%] md:w-[50%] leading-[30px] md:leading-[40px] lg:leading-[50px] xl:leading-[60px] text-[30px] lg:text-[40px] xl:text-[40px] font-normal text-[#333333]">
            Add to Home Screen: Your Loyalty Rewards On the Go!
          </h1>
          <p className="w-[90%] md:w-[60%] my-4 leading-[33px] text-[22px] font-normal text-[#636363]">
            Experience the convenience of having your loyalty rewards just a tap
            away. Add our app to your home screen today and start earning points
            effortlessly!
          </p>
        </div>

        <div className="w-[90%] ml-[5%] flex gap-y-4 flex-col-reverse md:flex-row justify-between gap-2 ">
          <div className="md:w-[50%] flex flex-col gap-3 ">
            <h2 className=" w-full leading-[25px] md:leading-[33px] text-[20px] md:text-[22px] font-[500]">
              How to Add to Home Screen: iOS (Safari):
            </h2>
            <p className="leading-[30px] md:leading-[33px] text-[20px] md:text-[22px] font-[500] text-[#636363]">
              <span className="font-semibold text-[#333333]">Step 1. </span>
              Open Safari and navigate to our Loyalty Rewards Web App.
            </p>
            <p className="leading-[30px] md:leading-[33px] text-[20px] md:text-[22px] font-[500] text-[#636363]">
              <span className="font-semibold text-[#333333]">Step 2. </span>
              Tap the "Share" icon at the bottom of the screen.
            </p>
            <p className="leading-[30px] md:leading-[33px] text-[20px] md:text-[22px] font-[500] text-[#636363]">
              <span className="font-semibold text-[#333333]">Step 3. </span>
              Select "Add to Home Screen."
            </p>
            <p className="leading-[30px] md:leading-[33px] text-[20px] md:text-[22px] font-[500] text-[#636363]">
              <span className="font-semibold text-[#333333]">Step 4. </span>
              Customize the app's name (if desired) and tap "Add."
            </p>
          </div>
          <div className="md:w-[40%] min-h-[200px] bg-[#EEEEEE]  flex items-center justify-center">
            <h1>IMG</h1>
          </div>
        </div>

        <div className="w-[90%] mt-[50px] ml-[5%] flex gap-y-4 flex-col justify-between md:flex-row  ">
          <div className="md:w-[45%] min-h-[200px] bg-[#EEEEEE]  flex items-center justify-center">
            <h1>IMG</h1>
          </div>

          <div className="md:w-[45%] flex flex-col gap-3 ">
            <h2 className="w-full leading-[25px] md:leading-[33px] text-[20px] md:text-[22px] font-[500] text-[#333333]">
              Add to Home Screen: Your Loyalty Rewards On the Go!
            </h2>
            <p className="leading-[30px] md:leading-[33px] text-[20px] md:text-[22px] font-[500] text-[#636363]">
              <span className="font-semibold text-[#333333]">Step 1. </span>
              Open Chrome and visit our Loyalty Rewards Web App
            </p>
            <p className="leading-[30px] md:leading-[33px] text-[20px] md:text-[22px] font-[500] text-[#636363]">
              <span className="font-semibold text-[#333333]">Step 2. </span>
              Tap the three-dot menu at the top-right corner.
            </p>
            <p className="leading-[30px] md:leading-[33px] text-[20px] md:text-[22px] font-[500] text-[#636363]">
              <span className="font-semibold text-[#333333]">Step 3. </span>
              Choose "Add to Home screen."
            </p>
            <p className="leading-[30px] md:leading-[33px] text-[20px] md:text-[22px] font-[500] text-[#636363]">
              <span className="font-semibold text-[#333333]">Step 4. </span>
              Confirm by tapping "Add."
            </p>
          </div>
        </div>
      </div>
      {/* Benefits of Adding to Home Screen */}
      <div className="w-full mt-[120px]  flex flex-col items-center justify-center">
        <div className="w-[90%] md:w-[80%] flex flex-col gap-3 md:gap-5 items-center justify-center">
          <h1 className="w-full md:w-[50%] md:text-center leading-[24px] md:leading-[40px] lg:leading-[50px] xl:leading-[60px] text-[18px] lg:text-[40px] font-medium text-[#333333]">
            Benefits of Adding to Home Screen
          </h1>
          <p className="w-full md:w-[90%] text-[#636363]">
            No need to search for the app. It's right there on your home screen.
            Offline Scanning: Scan QR codes offline and sync your data later
            when connected. Effortless Engagement: Engage with the app
            seamlessly, even when you're on the go.
          </p>
          <div className="w-full md:w-[50%] my-10 h-[200px] md:h-[400px] bg-[#EEEEEE] flex items-center justify-center">
            IMG
          </div>
        </div>
      </div>
    </div>
  );
}
