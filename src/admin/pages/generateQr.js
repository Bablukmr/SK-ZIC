import MyButton from "../../components/button";
import GenerateQrDatePicker from "../components/generateQrDatePicker";
import GenerateQrModal from "../components/generateQrModal";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  Form,
  Input,
  Row,
  Col,
  Button,
  message,
  DatePicker,
  InputNumber,
  notification,
} from "antd";
// import QRCode from "qrcode";

import CheckMobileHook480 from "../../components/checkMobile";
import moment from "moment";

// var JSZip = require("jszip");
// let zip = new JSZip();
// let imgg = zip.folder("images-qr");

// const getDataPart = (dataUrl) => {
//   var solution = dataUrl.split("base64,")[1];
//   return solution;
// };

export default function GenerateQr() {
  const [form] = Form.useForm();
  const isMobile = CheckMobileHook480();

  const canvasRef = useRef(null);

  const [showmodal, setShowModal] = useState(false);
  const [saved, setSaved] = useState(false);
  const [name, setName] = useState(null);
  // const [points, setPoints] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [expiry, setExpiry] = useState(null);
  const [currentDate] = useState(new Date());
  // const [startingNo, setStartingNo] = useState(null)

  function disabledDate(current) {
    return moment().add(-1, "days") >= current;
  }

  const formItemLayout = {
    labelCol: {
      sm: {
        span: 24,
      },
    },
    wrapperCol: {
      span: 24,
    },
  };

  const buttonItemLayout = {
    wrapperCol: {
      span: 8,
      offset: 0,
    },
  };

  const [returneddata, setReturneddata] = useState([]);

  const token = useSelector((state) => state.AuthReducer.token);

  const generateQr = (values) => {
    let dd = String(currentDate.getDate()).padStart(2, "0");
    let mm = String(currentDate.getMonth() + 1).padStart(2, "0");
    let yyyy = currentDate.getFullYear();

    setQuantity(values.quantity);
    setName(values.name)

    setShowModal(true);

    setSaved(false);

    // console.log("aa", isMobile);
    // console.log("a", expiry);
    // console.log("b", values?.expiryData);
    // console.log("c", expiry?.format("YYYY-MM-DD"));

    axios
      .post(
        "https://api-dev.skzicph.com/qr/create/",
        {
          name: values.name,
          points: values.points,
          numberOfQr: values.quantity,
          startingNo: values.serial_number,
          expiry: isMobile
            ? values?.expiryData?.format("YYYY-MM-DD")
            : expiry
            ? expiry?.format("YYYY-MM-DD")
            : yyyy + "-" + mm + "-" + dd,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((d) => {
        // setReturneddata(d.data.map((e) => ({ id: e.id, code: e.startingNo })));
        // let returnedData = d.data.map((e) => ({
        //   id: e.id,
        //   code: e.startingNo,
        // }));

        // console.log("returnedData", returnedData);

        // returnedData.forEach((d, i) => {
        //   QRCode.toDataURL(`https://skzicph.com/app/qr-detail?id=${d?.id}`)
        //     .then((url) => {
        //       let img = new Image();
        //       const canvas = canvasRef.current;
        //       const context = canvas.getContext("2d");
        //       canvas.width = "500";
        //       canvas.height = "650";
        //       context.fillStyle = "#ffffff";
        //       context.fillRect(0, 0, canvas.width, canvas.height);

        //       img.onload = function () {
        //         var wrh = img.width / img.height;
        //         var newWidth = canvas.width;
        //         var newHeight = newWidth / wrh;
        //         if (newHeight > canvas.height) {
        //           newHeight = canvas.height;
        //           newWidth = newHeight * wrh;
        //         }
        //         var xOffset =
        //           newWidth < canvas.width ? (canvas.width - newWidth) / 2 : 0;
        //         var yOffset =
        //           newHeight < canvas.height
        //             ? (canvas.height - newHeight) / 2 - 20
        //             : 0;
        //         context.drawImage(img, xOffset, yOffset, newWidth, newHeight);
        //         const x = canvas.width / 2;
        //         context.textAlign = "center";
        //         context.font = "bold 16pt Courier";
        //         context.fillStyle = "#000000";
        //         // context.fillStyle = "#ffffff"
        //         // context.font = `20px Verdana`;
        //         context.fillText(d.code, x - 10, yOffset + newHeight + 30);
        //         const pngUrl = canvas
        //           .toDataURL("image/png")
        //           .replace("image/png", "image/octet-stream");
        //         let dataURL = canvas.toDataURL();
        //         // dd.push({ data: dataURL });
        //         // setImgs(ff);
        //         // setImgs((imgs) => [...imgs, dataURL]);
        //         // console.log("pngUrl", dataURL);
        //         // ee.push({ data: pngUrl });
        //         // setImgs((imgs) => [...imgs, { data: pngUrl }]);
        //         // let downloadLink = document.createElement("a");
        //         // downloadLink.href = pngUrl;
        //         // downloadLink.download = `qr-${d.id}.png`;
        //         // // document.body.appendChild(downloadLink);
        //         // downloadLink.click();
        //         // // document.body.removeChild(downloadLink);
        //         // const blob = pngUrl.blob();
        //         // const commaIdx = dataURL.indexOf(",");

        //         imgg.file(d?.code + ".png", getDataPart(dataURL), {
        //           base64: true,
        //         });

        //         // res(dataURL, i);
        //         // console.log("dataURL", getDataPart(dataURL));
        //         // img.file(i+".jpg", images[i].data, {base64: true});
        //         // imgg.file(d?.id + ".png", dataURLtoBlob(pngUrl), { base64: true });
        //         context.clearRect(0, 0, canvas.width, canvas.height);
        //         context.fillStyle = "#ffffff";
        //         context.fillRect(0, 0, canvas.width, canvas.height);
        //         // context.fillStyle = "#ffffff";
        //         // console.log("eee", imgg);
        //       };
        //       img.src = url;
        //     })
        //     .catch((err) => {
        //       notification["error"]({
        //         message: "Error !!",
        //         description: "Something went wrong.",
        //       });
        //       console.error(err);
        //     });
        // });
        setSaved(true);
        form.resetFields();
      })
      .catch((e) => {
        setShowModal(false);
        console.log(e?.response);
        // let dd = [];
        // e?.response?.data?.map((d) => {
        //   if (d.startingNo) {
        //     dd.push({ id: "1" });
        //   }
        // });
        // if (dd.length === 0) {
        //   notification["error"]({
        //     message: "Error !!",
        //     description: "Something went wrong, try again",
        //   });
        // } else {
        notification["error"]({
          message: "Error !!",
          description: "Something went wrong, try again.",
        });
        // }
      });
  };

  const hideModal = () => {
    setShowModal(false);
    setSaved(false);
  };

  return (
    <>
      <div className="bg-[red] w-[500px] h-[650px] hidden">
        <canvas ref={canvasRef} className="w-[500px] h-[650px]" />
      </div>
      <div className="w-full bg-[reed] flex flex-col">
        <div className="flex items-center justify-center  bg-[greeen]">
          <h2>Create QR Code</h2>
        </div>

        <Form
          {...formItemLayout}
          layout="vertical"
          form={form}
          scrollToFirstError
          onFinish={generateQr}
          className="bg-white w-full px-8 pt-0 pb-4 rounded-lg"
          style={{
            background: "white",
            width: "100%",
            padding: "0px 24px",
            paddingBottom: "8px",
            borderRadius: "12px",
          }}
        >
          <Row
            gutter={[8, 8]}
            className="pt-8"
            style={{
              paddingTop: "32px",
            }}
          >
            <Col xs={{ span: 24 }} md={{ span: 6 }}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Name missing !!",
                  },
                ]}
              >
                <Input maxLength={240} placeholder="input name" />
              </Form.Item>
            </Col>

            <Col xs={{ span: 24 }} md={{ span: 6 }}>
              <Form.Item
                name="serial_number"
                label="Serial Number"
                rules={[
                  {
                    required: true,
                    message: "Serial Number missing !!",
                  },

                  {
                    pattern: /^(?:\d*)$/,
                    message: "Value should contain just number",
                  },
                  {
                    max: 10,
                    message: "Value should be 10 character",
                  },
                  {
                    min: 10,
                    message: "Value should be 10 character",
                  },
                ]}
                // validateTrigger="onBlur"
              >
                <Input
                  maxLength={10}
                  // minLength={10}
                  placeholder="input name"
                />
              </Form.Item>
            </Col>

            <Col xs={{ span: 24 }} md={{ span: 6 }}>
              <Form.Item
                name="points"
                label="Points"
                rules={[
                  {
                    required: true,
                    message: "Points missing !!",
                  },
                ]}
              >
                <InputNumber
                  placeholder="input Points"
                  precision={0}
                  controls={false}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 6 }}>
              <Form.Item
                name="quantity"
                label="Quantity"
                rules={[
                  {
                    required: true,
                    message: "Quantity missing !!",
                  },
                ]}
              >
                <InputNumber
                  // maxLength={4}
                  placeholder="input Quantity"
                  precision={0}
                  controls={false}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>

            {isMobile && (
              <Col xs={{ span: 24 }} md={{ span: 6 }}>
                <Form.Item
                  name="expiryData"
                  label="Expiry"
                  rules={[
                    {
                      required: true,
                      message: "Expected Validation Date missing !!",
                    },
                  ]}
                >
                  <DatePicker
                    style={{ width: "100%" }}
                    disabledDate={disabledDate}
                  />
                </Form.Item>
              </Col>
            )}
          </Row>

          {!isMobile && (
            <div className="mt-8 ml-[33%]  w-[34%]">
              <GenerateQrDatePicker
                setExpiry={setExpiry}
                disabledDate={disabledDate}
              />
            </div>
          )}

          <br />
          <Form.Item {...buttonItemLayout} className="flex justify-center">
            <MyButton
              text="Generate QR"
              mdh="h-[35px]"
              mdw="w-[120px]"
              bgColor="bg-[#23262d]"
              textColor="text-white"
              // onClick={generateQr}
            />
          </Form.Item>
        </Form>
      </div>
      <div className="w-full">
        <GenerateQrModal
          quantity={quantity}
          showmodal={showmodal}
          hideModal={hideModal}
          saved={saved}
          setShowModal={setShowModal}
          returnedData={returneddata}
          isMobile={isMobile}
          setSaved={setSaved}
          name={name}

          // zippp={zip}
        />
      </div>
    </>
  );
}

{
  /* <div className='flex justify-around bg-[redd] mt-1 w-[80%] ml-[10%]'>
                    <div className='flex flex-col items-center'>
                        <p className='p-0 m-0'>Name</p>
                        <input type='text' className='mt-2 text-center border-0 w-1/2 outline-none h-[30px] border-b border-[#333333] text-[#333333]'
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                    </div>

                    <div className='flex flex-col items-center'>
                        <p className='p-0 m-0'>Serial Number</p>
                        <input type='number' className='mt-2 text-center remove-arrow  border-0 w-1/2 h-[30px]  border-b border-[#333333] outline-none text-[#333333]'
                            onChange={(e) => {
                                setStartingNo(e.target.value)
                            }}
                            maxlength="2"
                        />
                    </div>


                    <div className='flex flex-col items-center'>
                        <p className='p-0 m-0'>Add Points</p>
                        <input type='number' className='mt-2 text-center remove-arrow  border-0 w-1/2 h-[30px]  border-b border-[#333333] outline-none text-[#333333]'
                            onChange={(e) => {
                                setPoints(e.target.value)
                            }}
                        />
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='p-0 m-0'>Add Quantity</p>
                        <input type='number' className='mt-2 text-center remove-arrow  border-0 w-1/2 h-[30px] border-b border-[#333333] outline-none text-[#333333]'
                            onChange={(e) => {
                                setQuantity(e.target.value)
                            }}
                        />
                    </div>
                </div>

                <div className='mt-8 ml-[33%]  w-[34%]'>
                    <GenerateQrDatePicker setExpiry={setExpiry} />
                </div>
                <div className=' mt-6 w-2/5 ml-[30%] bg-[reed] flex justify-center'>
                    <MyButton
                        text="Generate QR"
                        mdh="h-[35px]"
                        mdw="w-[120px]"
                        bgColor="bg-[#23262d]"
                        textColor="text-white"
                        onClick={generateQr}
                    />
                </div> */
}

// if (!name) {
//     notification['error']({
//         message: "Error !!", description: "Name missing"
//     })
// }
// else if (!startingNo) {
//     notification['error']({
//         message: "Error !!", description: "Start Code missing"
//     })
// }

// else if (startingNo.length !== 10) {
//     notification['error']({
//         message: "Error !!", description: "Start Code should be of 10 characters"
//     })
// }

// else if (!points) {
//     notification['error']({
//         message: "Error !!", description: "Points missing"
//     })
// }
// else if (!quantity) {
//     notification['error']({
//         message: "Error !!", description: "Quantity missing"
//     })
// }
// else {
