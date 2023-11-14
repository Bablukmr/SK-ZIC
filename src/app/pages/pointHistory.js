import { notification } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";

export default function PointHistory() {
  const token = useSelector((state) => state.AuthReducer.token);

  const userId = useSelector((state) => state?.AuthReducer?.userData?.id);

  const [point, setPoint] = useState(null);
  const [pointHistory, setPointHistory] = useState([]);

  console.log(pointHistory);

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:8000/qr/user-point?id=${userId}`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((d) => {
          setPoint(d.data && Array.isArray(d.data) && d.data[0]);
        })
        .catch((e) => {
          notification["error"]({
            message: "Error !!",
            description: "Something went wrong fetching user point.",
          });
        });
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:8000/qr/point-history?id=${userId}`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((d) => {
          // console.log("iooio", d.data);
          setPointHistory(d.data);
        })
        .catch((e) => {
          notification["error"]({
            message: "Error !!",
            description: "Something went wrong fetching user point.",
          });
        });
    }
  }, [userId]);

  return (
    <div
      className=" h-[calc(100vh-120px)]
  md:h-[calc(100vh-60px)] overflow-auto px-2 md:px-4"
      // justify-center items-center
    >
      <div className=" bg-[#f0f0f0] px-6 rounded-lg mt-[20px] h-[160px] flex flex-col ">
        <p className="m-0 mt-8">Point Balance</p>
        <p className="m-0 mt-2 font-bold text-[25px]">{point?.points}</p>
      </div>

      <div className=" bg-[#f0f0f0] px-4 py-6 rounded-lg mt-6 ">
        <ul className="list-none m-0 p-0">
          {pointHistory.length === 0 ? (
            <p>No Point history available.</p>
          ) : (
            pointHistory.map((d) => (
              <li className="py-3">
                <div className="flex justify-between bg-[redd] w-full">
                  <div className="w-1/2">
                    <p className="m-0 bg-[resd]">
                      {/* {moment(d?.date).format("YYYY/MM/DD kk:mm:ss")} */}
                      {moment(d?.date).format("YYYY - MM - DD")}
                    </p>
                  </div>
                  <div className="flex w-1/2 justify-end">
                    <p className="m-0 w-1/4  font-bold text-right">
                      {d.direction === "in" ? "+" : "-"}
                    </p>
                    <p className="m-0 w-1/4 text-right font-semibold">
                      {d.points}
                    </p>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
