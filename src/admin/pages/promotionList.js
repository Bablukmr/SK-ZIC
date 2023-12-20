import { useEffect, useState } from "react";
import { Button, List, Skeleton } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import { notification } from "antd";
import CheckMobileHook480 from "../../components/checkMobile";
// import MyButton from "../../components/button";
const count = 3;

export default function PromotionList() {
  const isMobile = CheckMobileHook480();

  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const token = useSelector((state) => state.AuthReducer.token);

  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [next, setNext] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/qr/promotions?pageNumber=${currentPage}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((d) => {
        console.log("ooooooooo", d.data);

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

  const deletePromotion = (id) => {
    setInitLoading(true);
    axios
      .delete(`http://localhost:8000/qr/promotions/${id}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((d) => {
        setInitLoading(false);
        let aa = data.filter((d) => d.id !== id);
        setData(aa);
        setList(aa);
      })
      .catch(() => {
        setInitLoading(false);
      });
  };

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
      .get(`http://localhost:8000/qr/promotions?pageNumber=${cc}`, {
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

  return (
    <>
      <div className="w-full bg-[reed]">
        <div className="flex bg-[redd] justify-between w-full md:w-3/5 items-center">
          <h2 className="px-2">Promotion List</h2>
        </div>

        <List
          className="demo-loadmore-list px-2"
          loading={initLoading}
          itemLayout="vertical"
          loadMore={next ? loadMore : null}
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button
                  type="primary"
                  danger
                  onClick={() => {
                    deletePromotion(item.id);
                  }}
                >
                  Delete
                </Button>,
              ]}
              extra={<img width={172} alt="promotion img" src={item.img} />}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  title={
                    <a href="https://ant.design">{"Title: " + item.title}</a>
                  }
                  description={
                    <div>
                      <p>
                        <b> Points</b>: {item.redeem_points}
                      </p>
                      <p>
                        <b>User Limit</b>: {item.user_limit},
                        <b> Promotion Limit</b>: {item.promotion_limit}
                      </p>
                      <p>
                        <b>Start Date</b>: {item.start},<b> Expiry Date</b>:{" "}
                        {item.expiry}
                      </p>
                    </div>
                  }
                />
                <p>{item.des}</p>
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </>
  );
}
