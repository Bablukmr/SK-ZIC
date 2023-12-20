import { useEffect, useState } from "react";
import { Button, List, Skeleton, Modal } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import { notification, DatePicker } from "antd";
import CheckMobileHook480 from "../../components/checkMobile";
import moment from "moment";
import MyButton from "../../components/button";
import { useNavigate } from "react-router-dom";

const count = 3;

export default function UnverifiedPromotin() {
  const isMobile = CheckMobileHook480();
  const navigate = useNavigate();
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const token = useSelector((state) => state.AuthReducer.token);
  const darkMode = useSelector((state) => state.AuthReducer.darkMode);

  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  const [next, setNext] = useState(true);

  const [openModal, setOpenModal] = useState(false);

  const [selectedQR, setSelectedQR] = useState(null);
  const [newValue, setNewValue] = useState(null);

  function disabledDate(current) {
    return moment().add(-1, "days") >= current;
  }

  const CloseModal = () => {
    setOpenModal(false);
    setSelectedQR(null);
    setNewValue(null);
  };

  console.log("dataaa", data);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/qr/verify-rewards?pageNumber=${currentPage}`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((d) => {
        setInitLoading(false);
        setData(d?.data?.results);
        setList(d?.data?.results);
        console.log("ddd", d.data.results);

        if (!d.data.next) {
          setNext(false);
        }
      })
      .catch((e) => {
        notification["error"]({
          message: "Error !!",
          description: "Something went wrong, try again ",
        });
      });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );

    const cc = currentPage + 1;
    axios
      .get(`http://localhost:8000/qr/verify-rewards?pageNumber=${cc}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((d) => {
        if (!d.data.next) {
          setNext(false);
        }

        setCurrentPage(currentPage + 1);
        const newData = data.concat(d.data?.results);
        setData(newData);
        setList(newData);
        setLoading(false);
      })
      .catch((e) => {
        notification["error"]({
          message: "Error !!",
          description: "Something went wrong, try again ",
        });
      });
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore} type="primary">
          load more...
        </Button>
      </div>
    ) : null;

  const updateReward = (id) => {
    axios
      .put(
        `http://localhost:8000/qr/user-promotions/${id}/`,
        {
          verified: true,
          // rejected: true,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((d) => {
        notification["success"]({
          message: "Success !!",
          description: "Updated.",
        });
        setData(data.filter((d) => d.id !== id));
        setList(list.filter((d) => d.id !== id));
      })
      .catch((e) => {
        // console.log(e);
        notification["error"]({
          message: "Error !!",
          description: "Something went wron, try again..",
        });
      });
  };

  const rejectReward = (id) => {
    axios
      .put(
        `http://localhost:8000/qr/user-promotions/${id}/`,
        {
          // verified: true,
          rejected: true,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((d) => {
        notification["success"]({
          message: "Success !!",
          description: "Updated.",
        });
        setData(data.filter((d) => d.id !== id));
        setList(list.filter((d) => d.id !== id));
      })
      .catch((e) => {
        // console.log(e);
        notification["error"]({
          message: "Error !!",
          description: "Something went wron, try again..",
        });
      });
  };

  // const onClick = (id) => {
  //   axios
  //     .put(
  //       `http://localhost:8000/users/update-user/${id}`,
  //       {
  //         is_active: true,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Token ${token}`,
  //         },
  //       }
  //     )
  //     .then((d) => {
  //       notification["success"]({
  //         message: "Success !!",
  //         description: "User Verified.",
  //       });

  //       setData(data.filter((d) => d.id !== id));
  //       setList(list.filter((d) => d.id !== id));
  //     })

  //     .catch((e) => {
  //       notification["error"]({
  //         message: "Error !!",
  //         description: "Something went wron, try again..",
  //       });
  //     });
  // };

  return (
    <>
      <div className="w-full bg-[reed]">
        <div className="flex bg-[redd] justify-between w-full md:w-3/5 items-center">
          <h2 className="px-2">Verify Rewards</h2>
        </div>

        <List
          className="demo-loadmore-list px-2"
          loading={initLoading}
          // itemLayout="vertical"
          loadMore={next ? loadMore : null}
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              actions={[
                <MyButton
                  onClick={() => {
                    updateReward(item?.id);
                  }}
                  text="Verify"
                  mdh="h-[35px]"
                  mdw="w-[80px]"
                  bgColor="bg-[#23262d]"
                  textColor="text-white"
                />,
                <button
                  className="h-[35px] w-[80px] text-white  text-center rounded-md cursor-pointer
                       outline-none border-none  active:shadow-none
                       active:translate-y-[6px] duration-100
                       bg-[#ff4d4f] shadow-[0px_6px_4px_0px_#cf1322]"
                  onClick={() => {
                    rejectReward(item?.id);
                  }}
                >
                  Reject
                </button>,

                // <MyButton
                //   onClick={() => {
                //     updateReward(item?.id);
                //   }}
                //   text="Reject"
                //   mdh="h-[35px]"
                //   mdw="w-[80px]"
                //   bgColor="bg-[#23262d]"
                //   textColor="text-white"
                // />,
              ]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  // avatar={<Avatar src={item.picture} />}
                  title={
                    <a href="https://ant.design">
                      {"Reward: " + item.pro_title}
                    </a>
                  }
                  description={
                    <>
                      <p>User: {item?.user_email}</p>
                      <> Quantity: {item?.quantity}</>
                    </>
                  }
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
      <Modal
        open={openModal}
        width={isMobile ? "75%" : "20%"}
        centered
        destroyOnClose
        onCancel={CloseModal}
        // onCancel={() => {
        //   setOpenModal(false);
        //   setSelectedQR(null);
        // }}
        footer={null}
        maskClosable={false}
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="p-0">Adjust Expiry</h2>

          <DatePicker
            onChange={(e) => {
              setNewValue(e);
            }}
            className="w-[100%]"
            disabledDate={disabledDate}
          />

          <div className="mt-4">
            <MyButton
              //   onClick={UpdateQr}
              text="Update"
              mdh="h-[35px]"
              mdw="w-[80px]"
              bgColor="bg-[#23262d]"
              textColor="text-white"
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
