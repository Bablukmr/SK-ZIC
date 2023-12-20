import { useState, useEffect } from "react";
import axios from "axios";
import CheckMobileHook480 from "../../components/checkMobile";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MyButton from "../../components/button";
<<<<<<< HEAD
// import { changeDarkMode } from "../../store/action";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

// import "./styles.css";
=======
>>>>>>> origin/main

import { Typography, Modal, Spin } from "antd";
import Branding from "../components/branding";

const { Paragraph, Text } = Typography;

export default function LandingPage(props) {
  console.log("zz", props);

  const navigate = useNavigate();
  const isMobile = CheckMobileHook480();

  const mobile = CheckMobileHook480();
  const [promotionData, setPromotionData] = useState([]);
  const [brandingImages, setBrandingImages] = useState([]);
  const [landingData, setLandingData] = useState([]);

  const [showmodal, setShowModal] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [detailData, setDetailData] = useState(null);

  const [toggleMobile, setToggleMobile] = useState(true);

  const darkMode = useSelector((state) => state.AuthReducer.darkMode);

  useEffect(() => {
    axios
      .get("https://api-dev.skzicph.com/qr/promotion-list")
      .then((d) => {
        console.log("pro", d.data);
        setPromotionData(d.data.results);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/ui/branding-public")
      .then((d) => {
        setBrandingImages(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });

    axios
      .get("http://localhost:8000/ui/landing/")
      .then((d) => {
        setLandingData(d.data);
        // console.log("abc", d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  const hideModal = () => {
    setShowModal(false);
    // setSaved(false);
  };

<<<<<<< HEAD
  useEffect(() => {
    const interval = setInterval(() => {
      // let abc = currentImageIndex + (1 % brandingImg.length);
      // console.log("a", abc);
      // console.log("b", brandingImg.length);
      // console.log("c", currentImageIndex + 1);
      // setCurrentImageIndex(currentImageIndex + 1);
      if (currentImageIndex + 1 === brandingImg.length - 2) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex(currentImageIndex + 1);
      }
      //  % brandingImg.length);
      // setCurrentImageIndex((currentImageIndex + 1) % brandingImg.length);
    }, 3000);
=======
  const showdetail = (id) => {
    setShowModal(true);
    setLoadingDetail(true);
>>>>>>> origin/main

    axios
      .get(`http://localhost:8000/qr/promotion?id=${id}`)
      .then((d) => {
        setLoadingDetail(false);
        setDetailData(d.data && Array.isArray(d.data) && d.data[0]);
      })
      .catch((e) => {
        setLoadingDetail(false);
        console.log(e.response);
      });
  };

  return (
    <div className={`pt-[50px] ${darkMode ? "bg-slate-800 text-white" : ""}`}>
      <div
        className={`w-full h-[550px] ${
          darkMode ? "bg-slate-700 " : "bg-[#EEEEEE]"
        }  flex  md:flex-row flex-col items-center justify-center md:relative`}
      >
        <div className="w-full md:w-[50%]  flex  flex-col items-center ">
          <div className="w-[90%] md:w-[80%] ml-[5%]">
            <a
              href={landingData[0]?.txt_link}
              className="no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1
                className={`leading-[50px] lg:leading-[60px] xl:leading-[80px] 2xl:leading-[120px] text-[40px] lg:text-[60px] 2xl:text-[80px] font-normal ${
                  darkMode ? "" : "text-[#333333]"
                } `}
              >
                Slogan of The Company
              </h1>
            </a>
            <p
              className={`w-[90%] md:w-[60%]  ${
                darkMode ? "" : "text-slate-400"
              }  `}
            >
              Stickers are components and pre-defined elements you can quickly
              copy and start using in your designs. Stickers.
            </p>

            <div className="my-4">
              <Link to="/signup">
                <MyButton
                  type=""
                  text="Register Now"
                  mdh="h-[35px]"
                  mdw="w-[120px]"
                  bgColor={`${darkMode ? "bg-red-500" : "bg-[#23262d]"}`}
                  textColor="text-white"
                />
              </Link>
            </div>
          </div>
        </div>
        <div
          // bg-[#EEEEEE]
          className={`w-[50%] h-full flex items-center justify-center`}
        >
          <a
            href={landingData[0]?.img_link}
            target="_blank"
            rel="noopener noreferrer"
            className=" h-full flex items-center justify-center"
          >
            <img
              src="/sookee-heart.png"
              alt="img"
              className="w-[80%] md:w-[70%] lg:w-[35%] xl:w-[25%] lg:absolute -top-6"
            />
          </a>
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
      <div
        className="w-full flex flex-col items-center justify-center"
        ref={props.reff}
      >
        <div className="w-[90%] mt-[120px] gap-x-4 gap-y-20 grid grid-cols-4 ">
          {promotionData?.map((d) => (
            <div
              key={d.id}
              className="border-2  flex flex-col items-center justify-center gap-2 
              rounded-md"
            >
              <div className=" w-full h-[80px] lg:h-[100px] xl:h-[150px]  rounded-md">
                <img
                  src={d.img}
                  alt={d.img}
                  className="w-full h-full rounded-md bg-[red]"
                />
              </div>
              <p className="m-0 p-0 w-full text-base font-medium">{d.title}</p>

              <Paragraph className="w-full m-0 p-0" ellipsis={true}>
                {d.des}
              </Paragraph>

              <p className="mb-2 mt-[-12px] m-0 p-0 w-full text-base font-medium">
                {d.redeem_points}
              </p>

              <MyButton
                text="Reedem"
                onClick={() => {
                  showdetail(d.id);
                }}
                type="submit"
                mdh="h-[35px]"
                mdw="w-full"
                // bg-[#23262d]
                bgColor={`${darkMode ? "bg-red-500" : "bg-[#40a9ff]"}`}
                textColor="text-white"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 w-full flex justify-center">
          <MyButton
            text="View All Rewards"
            mdh="h-[35px]"
            mdw="w-[180px]"
            bgColor="bg-[#23262d]"
            textColor="text-white"
            onClick={() => {
              navigate("/app/promotions");
            }}
          />
        </div>
      </div>

      {/* Branding & Promotions */}

      <div
        className="w-full mt-[120px] flex flex-col items-center justify-center"
        ref={props.brandingref}
      >
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
<<<<<<< HEAD
        <div className="w-[70%] md:w-[90%] lg:w-[70%] xl:w-[60%]  mt-[40px] md:mt-[50px] ">
          <Swiper
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            effect={"coverflow"}
            spaceBetween={mobile ? 20 : 50}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            loop={true}
            modules={[Pagination, EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {brandingImg.map((a) => (
              <SwiperSlide key={a.id}>
                <img src={a.url} alt="/" className="" />
              </SwiperSlide>
            ))}
          </Swiper>
=======

        <div className="h-[200px w-[70%] md:w-[90%] lg:w-[80%] xl:w-[60%]  mt-[40px] md:mt-[50px] ">
          {brandingImages.length !== 0 && (
            <Branding brandingimages={brandingImages} mobile={mobile} />
          )}
>>>>>>> origin/main
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
      </div>
      <Modal
        open={showmodal}
        width={isMobile ? "85%" : "30%"}
        centered
        destroyOnClose
        onCancel={hideModal}
        footer={null}
        maskClosable={false}
      >
        {loadingDetail ? (
          <div className="w-full h-[280px] flex items-center justify-center">
            <Spin />
          </div>
        ) : (
          <div className="flex flex-col pb-4">
            <div className="h-[100px] mt-10  rounded-md">
              <img
                src={detailData?.img}
                alt={detailData?.img}
                className="h-full object-contain rounded-md bg-[red]"
              />
            </div>

            <h2 className="p-0 w-full">{detailData?.title}</h2>
            <p className="text-left p-0 m-0">{detailData?.des}</p>

            <p className="p-0 m-0 mt-4">
              <span className="font-semibold p-0 m-0"> Promotion Limit</span>:{" "}
              {detailData?.promotion_limit}
            </p>
            <p className="">
              <span className="font-semibold p-0 m-0"> User Limit</span>:{" "}
              {detailData?.promotion_limit}
            </p>

            <div className="mt-4">
              <MyButton
                text="Reedem"
                mdh="h-[35px]"
                mdw="w-[120px]"
                bgColor="bg-[#23262d]"
                textColor="text-white"
              />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
