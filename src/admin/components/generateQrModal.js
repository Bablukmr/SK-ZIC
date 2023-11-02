import { Modal, notification } from "antd";
import React, { useState, useEffect, useRef } from "react";
import MyButton from "../../components/button";
// import QRCode from "qrcode";
// import { saveAs } from "file-saver";

// var JSZip = require("jszip");
// let zip = new JSZip();
// let imgg = zip.folder("images-qr");

export default function GenerateQrModal(props) {
  const {
    showmodal,
    hideModal,
    saved,
    setShowModal,
    quantity,
    returnedData,
    isMobile,
    setSaved,
    name,
  } = props;

  const canvasRef = useRef(null);

  const getDataPart = (dataUrl) => {
    var solution = dataUrl.split("base64,")[1];
    return solution;
  };

  // const [abcc, setAbc] = useState(null);

  // useEffect(() => {
  //   if (abcc) downloadQrrr();
  // }, [abcc]);

  function downloadQr() {
    // zip.remove("images-qr");
    setShowModal(false);
    window.open(`http://localhost:8000/qr/download-qr?name=${name}`, "_blank");

    // const abc = [];
    // returnedData.forEach((d, i) => {
    //   QRCode.toDataURL(`https://skzicph.com/app/qr-detail?id=${d?.id}`)
    //     .then((url) => {
    //       // abc[i] =
    //       const myPromise = new Promise((res, rej) => {
    //         let img = new Image();
    //         const canvas = canvasRef.current;
    //         const context = canvas.getContext("2d");
    //         canvas.width = "500";
    //         canvas.height = "650";
    //         context.fillStyle = "#ffffff";
    //         context.fillRect(0, 0, canvas.width, canvas.height);

    //         img.onload = function () {
    //           var wrh = img.width / img.height;
    //           var newWidth = canvas.width;
    //           var newHeight = newWidth / wrh;
    //           if (newHeight > canvas.height) {
    //             newHeight = canvas.height;
    //             newWidth = newHeight * wrh;
    //           }
    //           var xOffset =
    //             newWidth < canvas.width ? (canvas.width - newWidth) / 2 : 0;
    //           var yOffset =
    //             newHeight < canvas.height
    //               ? (canvas.height - newHeight) / 2 - 20
    //               : 0;
    //           context.drawImage(img, xOffset, yOffset, newWidth, newHeight);
    //           const x = canvas.width / 2;
    //           context.textAlign = "center";
    //           context.font = "bold 16pt Courier";
    //           context.fillStyle = "#000000";
    //           context.fillText(d.code, x - 10, yOffset + newHeight + 30);
    //           // const pngUrl = canvas
    //           //   .toDataURL("image/png")
    //           //   .replace("image/png", "image/octet-stream");
    //           let dataURL = canvas.toDataURL();
    //           imgg.file(d?.code + ".png", getDataPart(dataURL), {
    //             base64: true,
    //           });
    //           // res(dataURL);

    //           // console.log("yyyyyyyyyy", i);
    //           // console.log("uuuuuuuuuu", quantity - 1);

    //           if (quantity - 1 === i) {
    //             res();
    //             // console.log("yesssssssss");
    //           }

    //           context.clearRect(0, 0, canvas.width, canvas.height);
    //           context.fillStyle = "#ffffff";
    //           context.fillRect(0, 0, canvas.width, canvas.height);
    //         };
    //         img.src = url;
    //       });

    //       myPromise.then((d) => {
    //         zip.generateAsync({ type: "blob" }).then(function (file) {
    //           saveAs(file, "images.zip");
    //         });
    //         // setShowModal(false);
    //       });
    //     })
    //     .catch((err) => {
    //       notification["error"]({
    //         message: "Error !!",
    //         description: "Something went wrong.",
    //       });
    //       console.error(err);
    //     });
    // });

    // console.log("abcabcabc", abc);

    // Promise.all([abc]).then((values) => {
    //   console.log(values[0]);
    //   console.log("ggggggg", abc);
    //   setAbc("abc");

    //   console.log("ff", values[0]);
    //   values &&
    //     values.length === 1 &&
    //     values[0].map((d, i) => {
    //       console.log("fff", d);
    //       // d.then((ee) => {
    //       // imgg.file(i + ".png", getDataPart(ee), { base64: true });
    //       // console.log(ee);
    //       // });
    //     });
    //   // downloadQrrr()

    //   // zip.generateAsync({ type: "blob" }).then((file) => {
    //   //   saveAs(file, "images.zip");
    //   //   console.log("Saved...... ", file);
    //   // });
    //   // setShowModal(false);
    // });
    // console.log("hahaha");
  }

  // const downloadQrrr = () => {
  //   zip.generateAsync({ type: "blob" }).then(function (file) {
  //     saveAs(file, "images.zip");
  //   });
  //   // setShowModal(false);
  // };

  return (
    <>
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
          <h2 className="p-0">{quantity}</h2>
          <p className="text-center p-0 m-0">
            {!saved
              ? "QRs are being generated and is being saved to our database."
              : "QRs saved to the database."}
          </p>
          {!saved ? (
            <>
              <p className="text-center">Please wait a moment</p>

              <div className="pb-2">
                <img
                  src="/spin.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                  className="animate-spin mt-4"
                />
              </div>
            </>
          ) : (
            <div className="pb-4 mt-8">
              <MyButton
                text="Download QR"
                mdh="h-[35px]"
                mdw="w-[120px]"
                bgColor="bg-[#23262d]"
                textColor="text-white"
                onClick={downloadQr}
              />
              {/* <MyButton
                text="Download QR"
                mdh="h-[35px]"
                mdw="w-[120px]"
                bgColor="bg-[#23262d]"
                textColor="text-white"
                onClick={downloadQrrr}
              /> */}
            </div>
          )}
        </div>
      </Modal>
      <div className="bg-[red] w-[500px] h-[650px] hidden">
        <canvas {...props} ref={canvasRef} className="w-[500px] h-[650px]" />
      </div>
    </>
  );
}

// function downloadQr() {
//   console.log("AAAAAAAAAAAAAA");
//   let dd = [];
//   const promiseObj = new Promise((res, rej) => {
//     returnedData.forEach((d, i) => {
//       QRCode.toDataURL(`https://skzicph.com/app/qr-detail?id=${d?.id}`)
//         .then((url) => {
//           // let ff = [];
//           let img = new Image();
//           const canvas = canvasRef.current;
//           const context = canvas.getContext("2d");
//           canvas.width = "500";
//           canvas.height = "650";
//           context.fillStyle = "#ffffff";
//           context.fillRect(0, 0, canvas.width, canvas.height);

//           img.onload = function () {
//             var wrh = img.width / img.height;
//             var newWidth = canvas.width;
//             var newHeight = newWidth / wrh;
//             if (newHeight > canvas.height) {
//               newHeight = canvas.height;
//               newWidth = newHeight * wrh;
//             }
//             var xOffset =
//               newWidth < canvas.width ? (canvas.width - newWidth) / 2 : 0;
//             var yOffset =
//               newHeight < canvas.height
//                 ? (canvas.height - newHeight) / 2 - 20
//                 : 0;
//             context.drawImage(img, xOffset, yOffset, newWidth, newHeight);
//             const x = canvas.width / 2;
//             context.textAlign = "center";
//             context.font = "bold 16pt Courier";
//             context.fillStyle = "#000000";
//             // context.fillStyle = "#ffffff"
//             // context.font = `20px Verdana`;
//             context.fillText(d.code, x - 10, yOffset + newHeight + 30);
//             const pngUrl = canvas
//               .toDataURL("image/png")
//               .replace("image/png", "image/octet-stream");
//             let dataURL = canvas.toDataURL();
//             dd.push({ data: dataURL });
//             // setImgs(ff);
//             // setImgs((imgs) => [...imgs, dataURL]);
//             // console.log("pngUrl", dataURL);
//             // ee.push({ data: pngUrl });
//             // setImgs((imgs) => [...imgs, { data: pngUrl }]);
//             // let downloadLink = document.createElement("a");
//             // downloadLink.href = pngUrl;
//             // downloadLink.download = `qr-${d.id}.png`;
//             // // document.body.appendChild(downloadLink);
//             // downloadLink.click();
//             // // document.body.removeChild(downloadLink);
//             // const blob = pngUrl.blob();
//             // const commaIdx = dataURL.indexOf(",");

//             imgg.file(d?.id + ".png", getDataPart(dataURL), {
//               base64: true,
//             });

//             // res(dataURL, i);
//             // console.log("dataURL", getDataPart(dataURL));
//             // img.file(i+".jpg", images[i].data, {base64: true});
//             // imgg.file(d?.id + ".png", dataURLtoBlob(pngUrl), { base64: true });
//             context.clearRect(0, 0, canvas.width, canvas.height);
//             context.fillStyle = "#ffffff";
//             context.fillRect(0, 0, canvas.width, canvas.height);
//             // context.fillStyle = "#ffffff";
//             // console.log("eee", imgg);
//           };
//           img.src = url;
//         })
//         .catch((err) => {
//           notification["error"]({
//             message: "Error !!",
//             description: "Something went wrong.",
//           });
//           console.error(err);
//         });
//     });
//     // console.log("iiiiii", i);
//     // res(zip);
//     // );
//     // const result = await promiseObj
//   });

//   // const result = promiseObj.all();
//   // console.log(result);
//   promiseObj.then(downloadQrrr);

//   // );
// }
