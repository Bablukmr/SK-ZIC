import { useState, useEffect } from "react";
import axios from "axios";
import { Modal, InputNumber, notification, Typography, Spin } from "antd";
import CheckMobileHook480 from "../../components/checkMobile";
import MyButton from "../../components/button";
import { useSelector } from "react-redux";
import LoadingAni from "../../components/loading";

const { Paragraph, Text } = Typography;
const count = 4;

export default function Promotions() {
  const token = useSelector((state) => state.AuthReducer.token);
  const darkMode = useSelector((state) => state.AuthReducer.darkMode);

  const [initLoading, setInitLoading] = useState(true);

  const [list, setList] = useState([]);

  const [showmodal, setShowModal] = useState(false);

  const [quantity, setQuantity] = useState(0);
  const [selectedPromotions, setSelectedPromotions] = useState(null);
  const [loading, setLoading] = useState(false);

  const [showmodall, setShowModall] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [detailData, setDetailData] = useState(null);

  const isMobile = CheckMobileHook480();

  const hideModal = () => {
    setShowModal(false);
    // setSaved(false);
  };

  const hideModall = () => {
    setShowModall(false);
  };

  useEffect(() => {
    axios
<<<<<<< HEAD
      .get(`https://api-dev.skzicph.com/qr/promotion-list?pageNumber=${currentPage}`)
=======
      .get("http://localhost:8000/qr/all-promotion")
>>>>>>> origin/main
      .then((d) => {
        console.log(d.data);
        setInitLoading(false);
        setList(d?.data);
      })
      .catch((e) => {
        setInitLoading(false);
        console.log(e.response);
      });
  }, []);

<<<<<<< HEAD
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)]?.map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );

    const cc = currentPage + 1;
    axios
      .get(`https://api-dev.skzicph.com/qr/promotion-list?pageNumber=${cc}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((d) => {
        if (!d.data.next) {
          setNext(false);
        }
=======
  // const onLoadMore = () => {
  //   setLoading(true);
  //   setList(
  //     data.concat(
  //       [...new Array(count)].map(() => ({
  //         loading: true,
  //         name: {},
  //         picture: {},
  //       }))
  //     )
  //   );

  //   const cc = currentPage + 1;
  //   axios
  //     .get(`http://localhost:8000/qr/promotion-list?pageNumber=${cc}`, {
  //       headers: {
  //         Authorization: `Token ${token}`,
  //       },
  //     })
  //     .then((d) => {
  //       if (!d.data.next) {
  //         setNext(false);
  //       }
>>>>>>> origin/main

  //       setCurrentPage(currentPage + 1);
  //       const newData = data.concat(d.data?.results);
  //       setData(newData);
  //       setList(newData);
  //       setLoading(false);
  //     })
  //     .catch((e) => {
  //       setLoading(false);

  //       notification["error"]({
  //         message: "Error !!",
  //         description: "Something went wrong, try again ",
  //       });
  //     });
  // };
  // const LoadMore = () =>
  //   !initLoading && !loading ? (
  //     <div
  //       style={{
  //         textAlign: "center",
  //         marginTop: 12,
  //         height: 32,
  //         lineHeight: "32px",
  //       }}
  //     >
  //       <MyButton
  //         onClick={onLoadMore}
  //         type=""
  //         text="load more"
  //         mdh="h-[35px]"
  //         mdw="w-[120px]"
  //         bgColor={`${darkMode ? "bg-red-500" : "bg-[#23262d]"}`}
  //         textColor="text-white"
  //       />
  //     </div>
  //   ) : null;

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

  return (
    <>
<<<<<<< HEAD
      <div
        className="h-[calc(100vh-120px)] md:h-[calc(100vh-60px)] overflow-auto flex flex-col
       items-center"
      >
        <div className="w-[90%] mt-4 pt-10 gap-x-4 grid grid-cols-2 md:grid-cols-4">
          {list?.map((reward) => (
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
                  <Paragraph ellipsis={true}>{reward.des}</Paragraph>
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
=======
      {initLoading ? (
        <div className="w-full h-[calc(100vh-120px)] md:h-[calc(100vh-60px)]">
          <LoadingAni />
>>>>>>> origin/main
        </div>
      ) : (
        <div
          className="h-[calc(100vh-120px)] md:h-[calc(100vh-60px)] overflow-auto flex flex-col
       items-center"
        >
          <div className="w-[90%] mt-4 pt-10 gap-x-4 grid grid-cols-2 md:grid-cols-4">
            {list.map((d) => (
              <div
                key={d.id}
                className="px-2 pb-10 flex flex-col items-center justify-center gap-1
               rounded-md"
              >
                <div className="w-full h-[120px] rounded-t-md">
                  <img
                    src={d.img}
                    height={120}
                    width={"100%"}
                    className="rounded-t-md "
                  />
                </div>

                <div className="flex flex-col w-full gap-y-1 my-1 items-start justify-start">
                  <p className="w-full text-base font-medium m-0 p-0">
                    {d.title}
                  </p>
                  <p className="w-full text-[#979797] text-xs m-0 p-0">
                    <Paragraph ellipsis={true}>{d.des}</Paragraph>
                  </p>
                  <p className="w-full text-base font-medium m-0 p-0">
                    {d.redeem_points}
                  </p>
                </div>

                <MyButton
                  text="Reedem"
                  onClick={() => {
                    showdetail(d.id);
                    setSelectedPromotions(d.id);
                    // setShowModal(true);
                  }}
                  type="submit"
                  mdh="h-[35px]"
                  mdw="w-full"
                  // bg-[#23262d]
                  bgColor={`${darkMode ? "bg-red-500" : "bg-[#40a9ff]"}`}
                  textColor="text-white"
                />
                {/* </div> */}

                {/* <button
                  onClick={() => {
                    setSelectedPromotions(d.id);
                    setShowModal(true);
                  }}
                  className=" w-full bg-[#23262d] text-white py-2 cursor-pointer rounded-md"
                >
                  Redeem
                </button> */}
              </div>
            ))}
          </div>
        </div>
      )}
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
