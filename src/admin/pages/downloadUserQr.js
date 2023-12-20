import { useState } from "react";
import { Select, DatePicker, notification } from "antd";
import MyButton from "../../components/button";
import axios from "axios";

export default function DownloadUserQr() {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const download = () => {
    if (!start) {
      notification["error"]({
        message: "Error!",
        description: "Select Start Date",
      });
      return;
    }
    if (!end) {
      notification["error"]({
        message: "Error!",
        description: "Select End Date",
      });
      return;
    }
    let s = start.format("YYYY-MM-DD");
    let e = end.format("YYYY-MM-DD");
    window.open(
      `http://localhost:8000/qr/download-used-qr?start=${s}&&end=${e}`,
      "_blank"
    );
  };

  console.log(start);

  return (
    <div className="w-full">
      <div className="flex justify-between w-full md:w-3/5 items-center">
        <h2>Download Used QR</h2>
      </div>

      <div className="flex mt-10  w-full md:w-3/5 items-center">
        <p className="w-[180px]">Start Date :</p>
        <DatePicker
          className="w-[200px] ml-10"
          placeholder="Start Date"
          onChange={(e) => {
            setStart(e);
          }}
        />
      </div>

      <div className="flex mt-10  w-full md:w-3/5 items-center">
        <p className="w-[180px]">End Date :</p>
        <DatePicker
          className="w-[200px] ml-10"
          placeholder="End Date"
          onChange={(e) => {
            setEnd(e);
          }}
        />
      </div>

      <div className="flex mt-8">
        <div className="w-[180px] mr-10" />
        <MyButton
          onClick={download}
          text="Download"
          mdh="h-[35px]"
          mdw="w-[200px]"
          bgColor="bg-[#23262d]"
          textColor="text-white"
        />
      </div>
    </div>
  );
}
