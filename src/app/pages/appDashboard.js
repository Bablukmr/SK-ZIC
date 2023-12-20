import { useEffect, useState } from "react";
import { Modal, InputNumber, notification, Typography, Spin } from "antd";
import MyButton from "../../components/button";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import CheckMobileHook480 from "../../components/checkMobile";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUserPoint } from "../../store/action";
const { Paragraph, Text } = Typography;

export default function AppDashboard() {
  const token = useSelector((state) => state.AuthReducer.token);

  const userId = useSelector((state) => state?.AuthReducer?.userData?.id);

  const point = useSelector((state) => state?.AuthReducer?.point);

  console.log(userId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [point, setPoint] = useState(null);
  const [promotionData, setPromotionData] = useState([]);
  const [selectedPromotions, setSelectedPromotions] = useState(null);
  const [showmodal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const isMobile = CheckMobileHook480();
  const [loading, setLoading] = useState(false);

  const [showmodall, setShowModall] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [detailData, setDetailData] = useState(null);

  const darkMode = useSelector((state) => state.AuthReducer.darkMode);

  const hideModal = () => {
    setShowModal(false);
    // setSaved(false);
  };
  const hideModall = () => {
    setShowModall(false);
  };

  const showdetail = (id) => {
    setShowModall(true);
    setLoadingDetail(true);

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

  const onClick = () => {
    if (quantity === 0) {
      notification["error"]({
        message: "Error !!",
        description: "Quantity should be greate than 0",
      });
      return;
    }

    setLoading(true);
    axios
      .post(
        "https://api-dev.skzicph.com/qr/user-promotions/",
        {
          promotion: selectedPromotions,
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((d) => {
        setLoading(false);
        setQuantity(0);
        setSelectedPromotions(null);
        setShowModal(false);
        notification["success"]({
          message: "Success !!",
          description: "Promotion redeemed",
        });
        dispatch(getUserPoint(token, userId));
      })
      .catch((e) => {
        if (e?.response) {
          setLoading(false);
          if (e?.response?.data) {
            notification["error"]({
              message: "Error !!",
              description: e.response.data?.error,
            });
          } else {
            notification["error"]({
              message: "Error !!",
              description: "Something went wrong, try again.",
            });
          }
        } else {
          notification["error"]({
            message: "Error !!",
            description: "Something went wrong, try again.",
          });
        }
        // console.log(e.response.data.error);
      });
  };

  useEffect(() => {
<<<<<<< HEAD
    if (userId) {
      axios
        .get(`https://api-dev.skzicph.com/qr/user-point?id=${userId}`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((d) => {
          setPoint(d.data && Array.isArray(d.data) && d.data[0]);
          console.log(d.data);
        })
        .catch((e) => {
          notification["error"]({
            message: "Error !!",
            description: "Something went wrong fetching user point.",
          });
        });
=======
    if (userId && token) {
      dispatch(getUserPoint(token, userId));
      // axios
      //   .get(`http://localhost:8000/qr/user-point?id=${userId}`, {
      //     headers: {
      //       Authorization: `Token ${token}`,
      //     },
      //   })
      //   .then((d) => {
      //     setPoint(d.data && Array.isArray(d.data) && d.data[0]);
      //     console.log(d.data);
      //   })
      //   .catch((e) => {
      //     notification["error"]({
      //       message: "Error !!",
      //       description: "Something went wrong fetching user point.",
      //     });
      //   });
>>>>>>> origin/main
    }
  }, [userId, token]);

  useEffect(() => {
    if (token) {
      axios
        .get("https://api-dev.skzicph.com/qr/promotion-list")
        .then((d) => {
          console.log(d.data);
          setPromotionData(d.data?.results);
        })
        .catch((e) => {
          console.log(e.response);
        });
    }
  }, [token]);

  return (
    <>
      <div className="w-full  h-[calc(100vh-120px)] md:h-[calc(100vh-60px)] overflow-auto ">
        <div className="w-[96%] ml-[2%] md:w-[90%] md:ml-[5%] lg:w-[80%] lg:ml-[10%] xl:w-[70%] xl:ml-[15%] bg-[#f0f0f0]  rounded-lg mt-[20px] h-[160px] flex flex-col ">
          <p className="m-0 px-6 mt-8">Point Balance</p>
          <p className="m-0 px-6 mt-2 font-bold text-[25px]">{point?.points}</p>
        </div>

        <Link to="/app/point-history" className="no-underline text-black ">
          <div className="w-[96%] ml-[2%] md:w-[90%] md:ml-[5%] lg:w-[80%] lg:ml-[10%] xl:w-[70%] xl:ml-[15%] flex rounded-lg mt-4 justify-between items-center h-[60px] bg-[#f0f0f0]">
            <p className="font-semibold pl-3">Rewards History</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 pr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </Link>

<<<<<<< HEAD
        <div className="w-[96%] ml-[2%] md:w-[90%] md:ml-[5%] lg:w-[80%] lg:ml-[10%] xl:w-[70%] xl:ml-[15%]  flex flex-col justify-center">
=======
        <div className="w-[96%] mt-8  ml-[2%] md:w-[90%] md:ml-[5%] lg:w-[80%] lg:ml-[10%] xl:w-[70%] xl:ml-[15%]  flex flex-col justify-center">
>>>>>>> origin/main
          <p className="text-center font-bold">Rewards</p>

          <div className="mt-6 pt-2 gap-x-4 grid grid-cols-2 md:grid-cols-4">
            {promotionData.map((reward) => (
              <div
                key={reward.id}
                className="px-2 pb-10 flex flex-col items-center justify-center gap-1
             rounded-md"
              >
                <div className="w-full h-[120px] rounded-t-md">
                  <img
                    src={reward.img}
                    alt="/"
                    height={120}
                    width={"100%"}
                    className="rounded-t-md "
                  />
                </div>

                <div className="flex flex-col w-full gap-y-1 my-1 items-start justify-start">
                  <p className="w-full text-base font-medium m-0 p-0">
                    {reward.title}
                  </p>
                  <p className="w-full text-[#979797] text-xs m-0 p-0">
                    <Paragraph ellipsis={true}>{reward.des}</Paragraph>
                  </p>
                  <p className="w-full text-base font-medium m-0 p-0">
                    {reward.redeem_points}
                  </p>
                </div>
                <MyButton
                  text="Reedem"
                  onClick={() => {
                    showdetail(reward.id);
                    setSelectedPromotions(reward.id);
                    // setShowModal(true);
                  }}
                  type="submit"
                  mdh="h-[35px]"
                  mdw="w-full"
                  // bg-[#23262d]
                  bgColor={`${darkMode ? "bg-red-500" : "bg-[#40a9ff]"}`}
                  textColor="text-white"
                />

                {/* <button
                  onClick={() => {
                    setSelectedPromotions(reward.id);
                    setShowModal(true);
                  }}
                  className=" w-full bg-[#23262d] text-white py-2 cursor-pointer rounded-md"
                >
                  Redeem
                </button> */}
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center">
            <div className="pb-4 mt-8">
              <MyButton
                text="View All"
                mdh="h-[35px]"
                mdw="w-[120px]"
                bgColor="bg-[#23262d]"
                textColor="text-white"
                onClick={() => {
                  navigate("/app/promotions");
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={showmodal}
        width={isMobile ? "75%" : "20%"}
        centered
        destroyOnClose
        onCancel={hideModal}
        footer={null}
        maskClosable={false}
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="p-0">Quantity</h2>

          <InputNumber
            className="w-full"
            controls={false}
            precision={0.0}
            placeholder="Input Quantity"
            onChange={(e) => {
              setQuantity(e);
            }}
            min={0}
            disabled={loading}
          />

          {loading ? (
            <div className="pb-2 flex flex-col items-center justify-center">
              <img
                src="/spin.png"
                width={40}
                height={40}
                alt="Picture of the author"
                className="animate-spin mt-5 mb-1"
              />

              <p className="text-center">Please wait a moment</p>
            </div>
          ) : (
            <div className="pb-4 mt-8">
              <MyButton
                text="Reedem"
                mdh="h-[35px]"
                mdw="w-[120px]"
                bgColor="bg-[#23262d]"
                textColor="text-white"
                onClick={onClick}
              />
            </div>
          )}
        </div>
      </Modal>

      <Modal
        open={showmodall}
        width={isMobile ? "85%" : "30%"}
        centered
        destroyOnClose
        onCancel={hideModall}
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
                onClick={() => {
                  // setSelectedPromotions(d.id);
                  setShowModal(true);
                  setShowModall(false);
                }}
              />
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
