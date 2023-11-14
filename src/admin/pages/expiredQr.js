import { useEffect, useState } from "react";
import { Button, List, Skeleton, Modal } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import { notification, DatePicker } from "antd";
import CheckMobileHook480 from "../../components/checkMobile";
import moment from "moment";
import MyButton from "../../components/button";
const count = 3;

const ExpiredQr = () => {
  const isMobile = CheckMobileHook480();

  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const token = useSelector((state) => state.AuthReducer.token);

  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  const [next, setNext] = useState(true);

  const [openModal, setOpenModal] = useState(false);

  const [selectedQR, setSelectedQR] = useState(null);
  const [newValue, setNewValue] = useState(null);

  // useEffect(() => {
  // console.log("nextnext", newValue?.format("YYYY-MM-DD"));
  // });

  function disabledDate(current) {
    return moment().add(-1, "days") >= current;
  }

  const CloseModal = () => {
    setOpenModal(false);
    setSelectedQR(null);
    setNewValue(null);
  };

  useEffect(() => {
    axios
      .get(`https://api-dev.skzicph.com/qr/expired-qr?pageNumber=${currentPage}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((d) => {
        setInitLoading(false);
        setData(d?.data?.results);
        setList(d?.data?.results);

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
      .get(`https://api-dev.skzicph.com/qr/expired-qr?pageNumber=${cc}`, {
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
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  const UpdateQr = () => {
    axios
      .put(
        `https://api-dev.skzicph.com/qr/create/${selectedQR}/`,
        {
          expiry: newValue.format("YYYY-MM-DD"),
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((d) => {
        setData(data.filter((d) => d.id !== selectedQR));
        setList(list.filter((d) => d.id !== selectedQR));

        CloseModal();
        notification["success"]({
          message: "Success !!",
          description: "Updated.",
        });
      })
      .catch((e) => {
        notification["error"]({
          message: "Error !!",
          description: "Something went wrong.",
        });
      });
  };

  return (
    <>
      <div className="w-full bg-[reed]">
        <div className="flex bg-[redd] justify-between w-full md:w-3/5 items-center">
          <h2 className="px-2">Unused and Expired QR</h2>
        </div>

        <List
          className="demo-loadmore-list px-2"
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={next ? loadMore : null}
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              actions={[
                <a
                  key="list-loadmore-edit"
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedQR(item.id);
                  }}
                >
                  Modify
                </a>,
              ]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  // avatar={<Avatar src={item.picture} />}
                  title={
                    <a href="https://ant.design">{"Name: " + item.name}</a>
                  }
                  description={
                    <p>
                      <>Points: {item.points},</> <>Expiry: {item.expiry},</>{" "}
                      Serial Number: {item.startingNo}
                    </p>
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
              onClick={UpdateQr}
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
};
export default ExpiredQr;
