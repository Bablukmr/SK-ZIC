import { useState } from "react";
import LoadingAni from "../../components/loading";
import { Select, Input, DatePicker, notification, InputNumber } from "antd";
import MyButton from "../../components/button";
import moment from "moment";
import axios from "axios";
import { useSelector } from "react-redux";

export default function UpdateUnusedQr() {
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState(null);
  const [newValue, setNewValue] = useState(null);

  const token = useSelector((state) => state.AuthReducer.token);

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
          description: "Name Missing",
        });
        return;
      }
      if (!newValue) {
        notification["error"]({
          message: "Error !!",
          description: "New points missing.",
        });
        return;
      }
      setLoading(true);
      axios
        .post(
          "http://localhost:8000/qr/update-points-qr",
          {
            name: name,
            point: newValue,
          },
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        )
        .then((d) => {
          setLoading(false);
          setValue(null);
          setNewValue(null);
          setName("");
          setStartno(null);
          setEndno("");

          notification["success"]({
            message: "Success !!",
            description: "Qr Updated.",
          });
        })
        .catch((e) => {
          setLoading(false);
          setValue(null);
          setNewValue(null);
          setName("");
          setStartno(null);
          setEndno("");
          notification["error"]({
            message: "Error !!",
            description: "Something went wron, try again.",
          });
        });
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

      if (!newValue) {
        notification["error"]({
          message: "Error !!",
          description: "New points missing.",
        });
        return;
      }
      setLoading(true);

      axios
        .post(
          "http://localhost:8000/qr/update-points-qr",
          {
            start: startno,
            end: endno,
            point: newValue,
          },
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        )
        .then((d) => {
          setLoading(false);
          setValue(null);
          setNewValue(null);
          setName("");
          setStartno(null);
          setEndno("");

          notification["success"]({
            message: "Success !!",
            description: "Qr Updated.",
          });
        })
        .catch((e) => {
          setLoading(false);
          setValue(null);
          setNewValue(null);
          setName("");
          setStartno(null);
          setEndno("");

          notification["error"]({
            message: "Error !!",
            description: "Something went wron, try again.",
          });
        });
    }
  };

  return loading ? (
    <LoadingAni />
  ) : (
    <div className="w-full">
      <div className="flex justify-between w-full md:w-3/5 items-center">
        <h2>Update Unused, Not Expired QR</h2>
      </div>

      <div className="flex mt-10  w-full md:w-3/5 items-center">
        <p className="w-[180px]">Update By :</p>

        <Select
          placeholder="Select download type"
          width="180px"
          //   value={}
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

        <div className="flex mt-2  w-full md:w-3/5 items-center">
          <p className="w-[180px]">New Points</p>

          <InputNumber
            onChange={(e) => {
              setNewValue(e);
            }}
            precision={0}
            value={newValue}
            controls={false}
            placeholder="new point"
            className="w-[200px] ml-10"
          />
        </div>

        {value && (
          <div className="flex mt-8">
            <div className="w-[180px] mr-10" />

            <MyButton
              onClick={onClick}
              text="Update "
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
