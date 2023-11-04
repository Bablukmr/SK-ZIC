import { useState, useEffect } from "react";
import axios from "axios";
import CheckMobileHook480 from "../../components/checkMobile";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MyButton from "../../components/button";
// import { changeDarkMode } from "../../store/action";

export default function LandingPage() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const mobile = CheckMobileHook480();
  const [promotionData, setPromotionData] = useState([]);
  const [page, setPage] = useState(1);

  const darkMode = useSelector((state) => state.AuthReducer.darkMode);
  // console.log(darkMode);

  useEffect(() => {
    axios
      .get("http://localhost:8000/qr/promotion-list")
      .then((d) => {
        // console.log(d.data);
        setPromotionData(d.data);
      })
      .catch((e) => {
        // console.log(e.response);
      });
  }, []);

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
  ];

  const handlePage = (val) => {
    setPage(val);
  };

  useEffect(() => {
    // let mode = localStorage.getItem("darkMode");
    // console.log(mode);
  }, []);

  const [toggleMobile, setToggleMobile] = useState(true);
  // console.log("darkMode", darkMode);
  const brandingImg = [
    { id: 1, url: "/poster-1.jpg" },
    { id: 2, url: "/poster-2.jpg" },
    { id: 3, url: "/poster-3.jpg" },
    { id: 4, url: "/poster-2.jpg" },
    { id: 5, url: "/poster-1.jpg" },
    { id: 6, url: "/poster-3.jpg" },
    { id: 7, url: "/poster-1.jpg" },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let abc = currentImageIndex + (1 % brandingImg.length);
      console.log("a", abc);
      console.log("b", brandingImg.length);
      console.log("c", currentImageIndex + 1);
      // setCurrentImageIndex(currentImageIndex + 1);
      if (currentImageIndex + 1 === brandingImg.length - 2) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex(currentImageIndex + 1);
      }
      //  % brandingImg.length);
      // setCurrentImageIndex((currentImageIndex + 1) % brandingImg.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  return (
    <div className={`pt-[50px] ${darkMode ? "bg-slate-800 text-white" : ""}`}>
      <div
        className={`w-full h-[550px] ${
          darkMode ? "bg-slate-700 " : "bg-[#EEEEEE]"
        }  flex  md:flex-row flex-col items-center justify-center md:relative`}
      >
        <div className="w-full md:w-[50%]  flex  flex-col items-center ">
          <div className="w-[90%] md:w-[80%] ml-[5%]">
            <h1
              className={`leading-[50px] lg:leading-[60px] xl:leading-[80px] 2xl:leading-[120px] text-[40px] lg:text-[60px] 2xl:text-[80px] font-normal ${
                darkMode ? "" : "text-[#333333]"
              } `}
            >
              Slogan of The Company
            </h1>
            <p
              className={`w-[90%] md:w-[60%]  ${
                darkMode ? "" : "text-slate-400"
              }  `}
            >
              Stickers are components and pre-defined elements you can quickly
              copy and start using in your designs. Stickers.
            </p>

            <div className="my-4">
              <MyButton
                type=""
                text="Register Now"
                mdh="h-[35px]"
                mdw="w-[120px]"
                bgColor={`${darkMode ? "bg-red-500" : "bg-[#23262d]"}`}
                textColor="text-white"
              />
            </div>
          </div>
        </div>
        <div
          // bg-[#EEEEEE]
          className={`w-[50%] h-full flex items-center justify-center`}
        >
          <img
            src="/sookee-heart.png"
            alt="img"
            className="w-[80%] md:w-[70%] lg:w-[35%] xl:w-[25%] lg:absolute -top-6"
          />
        </div>
      </div>
      {/* Get Rewarded in 3 Simple Steps! */}
      <div className="w-full mt-[120px] flex flex-col items-center justify-center">
        <div className="w-[90%] flex flex-col gap-2 md:flex-row">
          <div className="md:w-[60%] w-full flex flex-col gap-3 ">
            <h1
              className={`leading-[30px] mb-3 md:leading-[40px] lg:leading-[50px] 2xl:leading-[60px] text-[22px] lg:text-[30px] 2xl:text-[35px] font-normal ${
                darkMode ? "text-white" : "text-[#333333]"
              } `}
            >
              Get Rewarded in 3 Simple Steps!
            </h1>
            <p
              className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
                darkMode ? "text-slate-400" : "text-[#636363]"
              }`}
            >
              <span
                className={`font-semibold  ${
                  darkMode ? "text-slate-600" : "text-[#333333]"
                }`}
              >
                Scan:{" "}
              </span>
              Snap the QR code, unlock rewards.
            </p>
            <p
              className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal  ${
                darkMode ? "text-slate-400" : "text-[#636363]"
              }`}
            >
              <span
                className={`font-semibold ${
                  darkMode ? "text-slate-600" : "text-[#333333]"
                }`}
              >
                Earn:{" "}
              </span>
              Watch your points pile up with every scan.
            </p>
            <p
              className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal  ${
                darkMode ? "text-slate-400" : "text-[#636363]"
              }`}
            >
              <span
                className={`font-semibold ${
                  darkMode ? "text-slate-600" : "text-[#333333]"
                }`}
              >
                Redeem:{" "}
              </span>
              Turn points into exciting rewards!
            </p>
            <p
              className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal  ${
                darkMode ? "text-slate-400" : "text-[#636363]"
              }`}
            >
              Start scanning and earning today – it's your journey to rewards!
            </p>
          </div>
          <div
            className={`md:w-[40%] mt-[50px] md:mt-0 bg-[#EEEEEE]  flex items-center justify-center`}
          >
            <h1 className="text-base font-normal">IMG</h1>
          </div>
        </div>
      </div>
      {/* rewards */}
      {mobile ? (
        //for mobile
        <div className="w-full flex flex-col items-center justify-center gap-y-4">
          <div className="w-[90%]  mt-[120px] gap-4 grid grid-cols-2">
            {rewardData.slice(0, 2).map((reward) => (
              <div
                key={reward.id}
                className="border-2 p-2 flex flex-col items-center justify-center gap-2 rounded-md"
              >
                <div className=" w-full h-[80px] rounded-md">
                  <img
                    src="/2df2-crop.jpg"
                    alt="img"
                    className="w-full h-full rounded-md"
                  />{" "}
                </div>
                <p className="m-0 p-0 w-full text-base font-medium">
                  {reward.title}
                </p>
                <p className="m-0 p-0 w-full text-[#979797] text-xs">
                  {reward.description}
                </p>
                <p className="m-0 p-0 w-full text-base font-medium">
                  {reward.points}
                </p>
                {/* <button className=" w-full bg-[#333333] text-white px-10 py-2 rounded-md">
                  Redeem
                </button> */}
                <MyButton
                  text="Redeem"
                  type="submit"
                  mdh="h-[35px]"
                  mdw="w-full"
                  bgColor={`${darkMode ? "bg-red-500" : "bg-[#23262d]"}`}
                  textColor="text-white"
                />
              </div>
            ))}
          </div>
          <p
            onClick={() => {
              navigate("/rewards");
            }}
            className="text-[#636363] px-4 py-1 rounded-md cursor-pointer"
          >
            See More...
          </p>
        </div>
      ) : (
        // for desktop
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-[90%] mt-[120px] gap-4 grid grid-cols-4 ">
            {rewardData.map((reward) => (
              <div
                key={reward.id}
                className="border-2 p-2 flex flex-col items-center justify-center gap-2 rounded-md"
              >
                <div className=" w-full md:h-[80px] lg:h-[100px] xl:h-[150px]  rounded-md">
                  <img
                    src="/2df2-crop.jpg"
                    alt="img"
                    className="w-full h-full rounded-md"
                  />
                </div>
                <p className="m-0 p-0 w-full text-base font-medium">
                  {reward.title}
                </p>
                <p className="m-0 p-0 w-full text-[#979797] text-xs">
                  {reward.description}
                </p>
                <p className="m-0 p-0 w-full text-base font-medium">
                  {reward.points}
                </p>
                {/* <button className=" w-full bg-[#333333] text-white px-10 py-2 rounded-md cursor-pointer">
                  Redeem
                </button> */}
                <MyButton
                  text="Redeem"
                  type="submit"
                  mdh="h-[35px]"
                  mdw="w-full"
                  bgColor={`${darkMode ? "bg-red-500" : "bg-[#23262d]"}`}
                  textColor="text-white"
                />
              </div>
            ))}
          </div>
          <div className="w-[80%] mt-5 text-md font-medium flex items-center justify-center gap-6">
            <svg
              onClick={() => handlePage(page - 1)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-4 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>

            <p onClick={() => handlePage(1)} className="cursor-pointer">
              1
            </p>
            <p onClick={() => handlePage(2)} className="cursor-pointer">
              2
            </p>
            <p onClick={() => handlePage(3)} className="cursor-pointer">
              3
            </p>
            <p onClick={() => handlePage(4)} className="cursor-pointer">
              4
            </p>
            <p onClick={() => handlePage(5)} className="cursor-pointer">
              5
            </p>
            <p onClick={() => handlePage(6)} className="cursor-pointer">
              ...
            </p>
            <svg
              onClick={() => handlePage(page + 1)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-4 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      )}
      {/* Branding & Promotions */}

      <div className="w-full mt-[120px] flex flex-col items-center justify-center">
        <div className="w-[90%] flex  flex-col items-center justify-center">
          <h1
            className={`leading-[30px] md:leading-[40px] lg:leading-[50px] 2xl:leading-[60px] text-[22px] lg:text-[30px] 2xl:text-[35px] font-normal ${
              darkMode ? "text-white" : "text-[#333333]"
            }`}
          >
            Branding & Promotions
          </h1>
          <p
            className={`w-[80%] md:w-[50%] xl:w-[40%] 2xl:w-[30%] text-center p-0 m-0 mb-4 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal  ${
              darkMode ? "text-slate-400" : "text-[#636363]"
            }  `}
          >
            Stickers are components and pre-defined elements you...
          </p>
        </div>
        <div className="w-[90%] md:w-[90%] lg:w-[70%] xl:w-[60%] grid items-center justify-center mt-[40px] md:mt-[50px] grid-cols-3 gap-6 ">
          {brandingImg
            .slice(currentImageIndex, currentImageIndex + 3)
            .map((img, index) => (
              <div
                key={img.id}
                className={`md:w-[200px] ${
                  index === 1 ? "transform scale-125" : ""
                }`}
              >
                {/* <h1>{img.id}</h1> */}
                <img
                  onClick={() => setCurrentImageIndex(index)}
                  src={img.url}
                  alt="/"
                  className="w-full h-full"
                />
              </div>
            ))}
        </div>
      </div>

      {/* add to home Screen */}

      <div className="w-full mt-[120px] flex flex-col  gap-4">
        <div className=" ml-[5%] ">
          <h1
            className={`w-[90%] md:w-[50%] leading-[30px] mb-3 md:leading-[40px] lg:leading-[50px] 2xl:leading-[60px] text-[22px] lg:text-[30px] 2xl:text-[35px] font-normal  ${
              darkMode ? "text-white" : "text-[#333333]"
            }`}
          >
            Add to Home Screen: Your Loyalty Rewards On the Go!
          </h1>
          <p
            className={`w-[90%] md:w-[70%] lg:w-[60%]  p-0 m-0 mb-4 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
              darkMode ? "text-slate-400" : "text-[#636363]"
            }`}
          >
            Experience the convenience of having your loyalty rewards just a tap
            away. Add our app to your home screen today and start earning points
            effortlessly!
          </p>
        </div>

        {mobile ? (
          <div className={`w-[90%] ml-[5%]`}>
            <h1
              className={`w-full leading-[25px] md:leading-[33px] text-[20px] md:text-[22px] font-medium ${
                darkMode ? "text-white" : "text-[#333333]"
              }`}
            >
              How to Add to Home Screen:
            </h1>
            <div className="w-full my-6 font-medium flex h-[40px]">
              <div
                onClick={() => setToggleMobile(true)}
                className={`w-[50%] ${
                  toggleMobile
                    ? darkMode
                      ? "bg-red-500 text-white"
                      : "bg-[#333333] text-white"
                    : "text-[#333333] bg-[#DEDEDE]"
                } h-full flex items-center justify-center`}
              >
                <p>iOS (Safari)</p>
              </div>
              <div
                onClick={() => setToggleMobile(false)}
                className={`w-[50%]  ${
                  toggleMobile
                    ? "text-[#333333] bg-[#DEDEDE]"
                    : darkMode
                    ? "bg-red-500 text-white"
                    : "bg-[#333333] text-white"
                } h-full flex items-center justify-center`}
              >
                <p> Android (Chrome)</p>
              </div>
            </div>
            {toggleMobile ? (
              <div>
                <div className="w-[90%] ml-[5%] flex gap-y-4 flex-col md:flex-row justify-between gap-2 ">
                  <div className="md:w-[50%] flex flex-col gap-3 ">
                    <p
                      className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
                        darkMode ? "text-slate-400" : "text-[#636363]"
                      }`}
                    >
                      <span
                        className={`font-semibold ${
                          darkMode ? "text-slate-600" : "text-[#333333]"
                        }`}
                      >
                        Step 1.{" "}
                      </span>
                      Open Safari and navigate to our Loyalty Rewards Web App.
                    </p>
                    <p
                      className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
                        darkMode ? "text-slate-400" : "text-[#636363]"
                      }`}
                    >
                      <span
                        className={`font-semibold ${
                          darkMode ? "text-slate-600" : "text-[#333333]"
                        }`}
                      >
                        Step 2.{" "}
                      </span>
                      Tap the "Share" icon at the bottom of the screen.
                    </p>
                    <p
                      className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
                        darkMode ? "text-slate-400" : "text-[#636363]"
                      }`}
                    >
                      <span
                        className={`font-semibold ${
                          darkMode ? "text-slate-600" : "text-[#333333]"
                        }`}
                      >
                        Step 3.{" "}
                      </span>
                      Select "Add to Home Screen."
                    </p>
                    <p
                      className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
                        darkMode ? "text-slate-400" : "text-[#636363]"
                      }`}
                    >
                      <span
                        className={`font-semibold ${
                          darkMode ? "text-slate-600" : "text-[#333333]"
                        }`}
                      >
                        Step 4.{" "}
                      </span>
                      Customize the app's name (if desired) and tap "Add."
                    </p>
                  </div>
                  <div
                    className={`md:w-[40%] h-[300px] rounded-md mt-[10px]  flex items-center justify-center`}
                  >
                    <img
                      src="/Asset 12@2x-8.png"
                      alt="/"
                      className="h-[85%] w-[80%]"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="w-[90%]  ml-[5%] flex gap-y-4 flex-col justify-between md:flex-row ">
                  <div className="md:w-[45%] flex flex-col gap-3 ">
                    <p
                      className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
                        darkMode ? "text-slate-400" : "text-[#636363]"
                      }`}
                    >
                      <span
                        className={`font-semibold  ${
                          darkMode ? "text-slate-600" : "text-[#333333]"
                        }`}
                      >
                        Step 1.{" "}
                      </span>
                      Open Chrome and visit our Loyalty Rewards Web App
                    </p>
                    <p
                      className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
                        darkMode ? "text-slate-400" : "text-[#636363]"
                      }`}
                    >
                      <span
                        className={`font-semibold  ${
                          darkMode ? "text-slate-600" : "text-[#333333]"
                        }`}
                      >
                        Step 2.{" "}
                      </span>
                      Tap the three-dot menu at the top-right corner.
                    </p>
                    <p
                      className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
                        darkMode ? "text-slate-400" : "text-[#636363]"
                      }`}
                    >
                      <span
                        className={`font-semibold  ${
                          darkMode ? "text-slate-600" : "text-[#333333]"
                        }`}
                      >
                        Step 3.{" "}
                      </span>
                      Choose "Add to Home screen."
                    </p>
                    <p
                      className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
                        darkMode ? "text-slate-400" : "text-[#636363]"
                      }`}
                    >
                      <span
                        className={`font-semibold  ${
                          darkMode ? "text-slate-600" : "text-[#333333]"
                        }`}
                      >
                        Step 4.{" "}
                      </span>
                      Confirm by tapping "Add."
                    </p>
                  </div>
                  <div
                    className={`md:w-[40%] h-[250px] mt-[10px] rounded-md  flex items-center justify-center`}
                  >
                    <img
                      src="/Asset 6.png"
                      alt="/"
                      className="h-[85%] w-[80%]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full">
            <div className="w-[90%] ml-[5%] flex gap-y-4 flex-col-reverse md:flex-row justify-between gap-2 ">
              <div className="md:w-[50%] flex flex-col gap-3 ">
                <h2
                  className={`w-full leading-[25px] md:leading-[33px] text-[20px] md:text-[22px] font-medium ${
                    darkMode ? "text-white" : "text-[#333333]"
                  }`}
                >
                  How to Add to Home Screen: iOS (Safari):
                </h2>
                <p
                  className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
                    darkMode ? "text-slate-400" : "text-[#636363]"
                  }`}
                >
                  <span
                    className={`font-semibold ${
                      darkMode ? "text-slate-600" : "text-[#333333]"
                    }`}
                  >
                    Step 1.{" "}
                  </span>
                  Open Safari and navigate to our Loyalty Rewards Web App.
                </p>
                <p
                  className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
                    darkMode ? "text-slate-400" : "text-[#636363]"
                  }`}
                >
                  <span
                    className={`font-semibold ${
                      darkMode ? "text-slate-600" : "text-[#333333]"
                    }`}
                  >
                    Step 2.{" "}
                  </span>
                  Tap the "Share" icon at the bottom of the screen.
                </p>
                <p
                  className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
                    darkMode ? "text-slate-400" : "text-[#636363]"
                  }`}
                >
                  <span
                    className={`font-semibold ${
                      darkMode ? "text-slate-600" : "text-[#333333]"
                    }`}
                  >
                    Step 3.{" "}
                  </span>
                  Select "Add to Home Screen."
                </p>
                <p
                  className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
                    darkMode ? "text-slate-400" : "text-[#636363]"
                  }`}
                >
                  <span
                    className={`font-semibold ${
                      darkMode ? "text-slate-600" : "text-[#333333]"
                    }`}
                  >
                    Step 4.{" "}
                  </span>
                  Customize the app's name (if desired) and tap "Add."
                </p>
              </div>
              <div
                className={`md:w-[40%] md:h-[300px] lg:h-[350px] rounded-md flex items-center justify-center`}
              >
                <img
                  src="/Asset 12@2x-8.png"
                  alt="/"
                  className="h-[95%] w-[80%]"
                />
              </div>
            </div>

            <div className="w-[90%] mt-[50px] ml-[5%] flex gap-y-4 flex-col justify-between md:flex-row  ">
              <div
                className={`md:w-[40%] lg:w-[45%] md:h-[300px]   lg:h-[350px]  flex items-center justify-center`}
              >
                <img src="/Asset 6.png" alt="/" className="h-[95%] w-[80%]" />
              </div>

              <div className="md:w-[45%] flex flex-col gap-3 ">
                <h2
                  className={`w-full leading-[25px] md:leading-[33px] text-[20px] md:text-[22px] font-medium ${
                    darkMode ? "text-white" : "text-[#333333]"
                  }`}
                >
                  Add to Home Screen: Your Loyalty Rewards On the Go!
                </h2>
                <p
                  className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
                    darkMode ? "text-slate-400" : "text-[#636363]"
                  }`}
                >
                  <span
                    className={`font-semibold  ${
                      darkMode ? "text-slate-600" : "text-[#333333]"
                    }`}
                  >
                    Step 1.{" "}
                  </span>
                  Open Chrome and visit our Loyalty Rewards Web App
                </p>
                <p
                  className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
                    darkMode ? "text-slate-400" : "text-[#636363]"
                  }`}
                >
                  <span
                    className={`font-semibold  ${
                      darkMode ? "text-slate-600" : "text-[#333333]"
                    }`}
                  >
                    Step 2.{" "}
                  </span>
                  Tap the three-dot menu at the top-right corner.
                </p>
                <p
                  className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
                    darkMode ? "text-slate-400" : "text-[#636363]"
                  }`}
                >
                  <span
                    className={`font-semibold  ${
                      darkMode ? "text-slate-600" : "text-[#333333]"
                    }`}
                  >
                    Step 3.{" "}
                  </span>
                  Choose "Add to Home screen."
                </p>
                <p
                  className={`p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
                    darkMode ? "text-slate-400" : "text-[#636363]"
                  }`}
                >
                  <span
                    className={`font-semibold  ${
                      darkMode ? "text-slate-600" : "text-[#333333]"
                    }`}
                  >
                    Step 4.{" "}
                  </span>
                  Confirm by tapping "Add."
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Benefits of Adding to Home Screen */}
      <div className="w-full mt-[120px] pb-[50px] flex flex-col items-center justify-center">
        <div className="w-[90%] md:w-[80%] flex flex-col gap-3 items-center justify-center">
          <h1
            className={`w-full md:w-[50%] leading-[30px] mb-3 md:leading-[40px] lg:leading-[50px] 2xl:leading-[60px] text-[22px] lg:text-[30px] 2xl:text-[35px] font-normal  ${
              darkMode ? "text-white" : "text-[#333333]"
            }`}
          >
            Benefits of Adding to Home Screen
          </h1>
          <p
            className={`w-full  md:w-[70%] xl:w-[60%]  md:text-center p-0 m-0 xl:leading-[33px] text-[18px] md:text-[20px] 2xl:text-[22px] font-normal ${
              darkMode ? "text-slate-400" : "text-[#636363]"
            }`}
          >
            No need to search for the app. It's right there on your home screen.
            Offline Scanning: Scan QR codes offline and sync your data later
            when connected. Effortless Engagement: Engage with the app
            seamlessly, even when you're on the go.
          </p>
          {/* <div className="w-full md:w-[50%] my-10 h-[200px] md:h-[300px] bg-[#EEEEEE] flex items-center justify-center">
            IMG
          </div> */}
        </div>

        {/* <div
          className={`w-full my-10 h-[700px] md:h-[400px] ${
            darkMode ? "bg-slate-700" : "bg-[#383434]"
          }   flex justify-center items-center`}
        >
          <div className="w-[80%] ml-[10%] md:ml-0 flex-col flex md:flex-row items-center justify-center ">
            <div className="w-[90%] ml-[5%] md:w-[40%] h-[300px]">
              <img
                src="/sookee-thumbs-up.png"
                alt="/"
                className="h-[80%] md:h-[85%] lg:h-[95%] w-[80%]"
              />
            </div>
            <div className="w-[90%] ml-[5%] md:w-[40%] h-[300px]">
              <img
                src="/Asset 12@2x-8.png"
                alt="/"
                className="h-[80%] md:h-[85%] lg:h-[95%] w-[80%]"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
