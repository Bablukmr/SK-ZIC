import { useState, useEffect } from "react";
import axios from "axios";
import { Modal, InputNumber, notification } from "antd";
import CheckMobileHook480 from "../../components/checkMobile";
import MyButton from "../../components/button";
import { useSelector } from "react-redux";

export default function Promotions() {
  const token = useSelector((state) => state.AuthReducer.token);

  const [promotionData, setPromotionData] = useState([]);

  const [showmodal, setShowModal] = useState(false);

  const [quantity, setQuantity] = useState(0);
  const [selectedPromotions, setSelectedPromotions] = useState(null);
  const [loading, setLoading] = useState(false);

  const isMobile = CheckMobileHook480();

  const hideModal = () => {
    setShowModal(false);
    // setSaved(false);
  };

  useEffect(() => {
    console.log(quantity);
  });

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
        "http://localhost:8000/qr/user-promotions/",
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

  return (
    <>
      <div className="h-[calc(100vh-120px)] md:h-[calc(100vh-60px)] overflow-auto flex justify-center">
        <div className="w-[90%] pt-10 gap-x-4 grid grid-cols-2 md:grid-cols-4">
          {promotionData.map((reward) => (
            <div
              key={reward.id}
              className="px-2 pb-10 flex flex-col items-center justify-center gap-1
               rounded-md"
            >
              <div className="w-full h-[120px] rounded-t-md">
                <img
                  src={reward.img}
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
                  {reward.des}
                </p>
                <p className="w-full text-base font-medium m-0 p-0">
                  {reward.redeem_points}
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedPromotions(reward.id);
                  setShowModal(true);
                }}
                className=" w-full bg-[#23262d] text-white py-2 cursor-pointer rounded-md"
              >
                Redeem
              </button>
            </div>
          ))}
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
    </>
  );
}
