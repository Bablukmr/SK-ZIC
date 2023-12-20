import React, { useState } from "react";
import { Select, Input, notification, InputNumber } from "antd";
import MyButton from "../../components/button";
export default function DownloadQr() {
  const [value, setValue] = useState(null);

  const [name, setName] = useState("");
  const [startno, setStartno] = useState(null);
  const [endno, setEndno] = useState("");

  const handleChange = (value) => {
    setValue(value);
  };

  const onClick = () => {
    if (value === "name") {
      if (!name) {
        notification["error"]({
          message: "Error !!",
          description: "Missing name.",
        });
        return;
      } else {
        window.open(
          `http://localhost:8000/qr/download-qr?name=${name}`,
          "_blank"
        );
      }
    } else {
      if (!startno) {
        notification["error"]({
          message: "Error !!",
          description: "Start number missing.",
        });
        return;
      } else {
        if (startno.toString().length !== 10) {
          notification["error"]({
            message: "Error !!",
            description: "Start digit should be 10 digita long.",
          });
          return;
        }
      }

      if (!endno) {
        notification["error"]({
          message: "Error !!",
          description: "End number missing.",
        });
        return;
      } else {
        if (endno.toString().length !== 10) {
          notification["error"]({
            message: "Error !!",
            description: "End digit should be 10 digita long.",
          });
          return;
        }
      }

      if (startno >= endno) {
        notification["error"]({
          message: "Error !!",
          description: "End number should be greater then start number.",
        });
        return;
      }

      window.open(
        `http://localhost:8000/qr/download-qr-by-serial?start=${startno}&&end=${endno}`,
        "_blank"
      );
    }
  };
  return (
    <div className="w-full">
      <div className="flex justify-between w-full md:w-3/5 items-center">
        <h2>Download QR</h2>
      </div>

      <div className="flex mt-10  w-full md:w-3/5 items-center">
        <p className="w-[180px]">Download By :</p>

        <Select
          placeholder="Select download type"
          width="180px"
          className="w-[200px] ml-10"
          onChange={handleChange}
          options={[
            {
              value: "name",
              label: "Name",
            },
            {
              value: "serial_number",
              label: "Serial Number",
            },
          ]}
        />
      </div>
      <>
        {value === "name" ? (
          <div className="flex mt-2  w-full md:w-3/5 items-center">
            <p className="w-[180px]">Name :</p>
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              maxLength={240}
              placeholder="input name"
              className="w-[200px] ml-10"
            />
          </div>
        ) : (
          value === "serial_number" && (
            <>
              <div className="flex mt-2  w-full md:w-3/5 items-center">
                <p className="w-[180px]">Start Serial Number :</p>
                <InputNumber
                  onChange={(e) => {
                    setStartno(e);
                  }}
                  precision={0}
                  value={startno}
                  controls={false}
                  placeholder="start number"
                  className="w-[200px] ml-10"
                />
              </div>
              <div className="flex mt-2  w-full md:w-3/5 items-center">
                <p className="w-[180px]">End Serial Number :</p>
                <InputNumber
                  onChange={(e) => {
                    setEndno(e);
                  }}
                  precision={0}
                  value={endno}
                  controls={false}
                  placeholder="end number"
                  className="w-[200px] ml-10"
                />
              </div>
            </>
          )
        )}

        {value && (
          <div className="flex mt-8">
            <div className="w-[180px] mr-10" />
            <MyButton
              onClick={onClick}
              text="Download"
              mdh="h-[35px]"
              mdw="w-[200px]"
              bgColor="bg-[#23262d]"
              textColor="text-white"
            />
          </div>
        )}
      </>
    </div>
  );
}
