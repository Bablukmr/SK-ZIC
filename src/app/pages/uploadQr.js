import { useState, useEffect } from "react";
import MyButton from "../../components/button";
import { Upload, Modal, message, Form, notification } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

export default function UploadQR() {
  const form = Form.useForm();

  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      let cc = reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
      return Upload.LIST_IGNORE;
    }
    // const isLt2M = file.size / 1024 / 1024 < 2;
    // if (!isLt2M) {
    //   message.error("Image must smaller than 2MB!");
    //   return Upload.LIST_IGNORE;
    // }
    return false;
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file?.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ml-2">Select QR</div>
    </div>
  );

  function onFinish(values) {
    // setLoading(true);
    // console.log(values);

    const qrImg = fileList[0]?.originFileObj;

    // console.log("eeeeeeeee", qrImg);
    if (!qrImg) {
      notification["error"]({
        message: "Error !",
        description: "Select a QR.",
      });
      return;
    }

    let data = new FormData();

    data.append("qr", qrImg);

    axios({
      url: "http://localhost:8000/qr/qr-read/",
      method: "POST",
      data,
      //   headers: {
      //     Authorization: `Token ${token}`,
      //     Accept: "application/json",
      //   },
    })
      .then((d) => {
        // setLoading(false);
        // form.resetFields();
        notification["success"]({
          message: "Success !!",
          description: "QR uploaded.",
        });
      })
      .catch((e) => {
        // console.log(e.response);
        // setLoading(false);
        // form.resetFields();
        notification["error"]({
          message: "Error !!",
          description: "Something went wrong, try again.",
        });
      });
  }

  return (
    <>
      <div className="w-full bg-[reed]">
        <div className="w-[96%] ml-[2%] md:w-[90%] md:ml-[5%] lg:w-[80%] lg:ml-[10%] xl:w-[70%] xl:ml-[15%] flex bg-[redd] justify-between  items-center">
          <h2>Upload QR</h2>
        </div>
        <div className="w-[96%] ml-[2%] md:w-[90%] md:ml-[5%] lg:w-[80%] lg:ml-[10%] xl:w-[70%] xl:ml-[15%] flex mt-6 items-center">
          {/* <p className="w-[180px]">Select QR</p> */}
          <Upload
            beforeUpload={beforeUpload}
            fileList={fileList}
            listType="picture-card"
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
        </div>

        <div className="w-[96%] ml-[2%] md:w-[90%] md:ml-[5%] lg:w-[80%] lg:ml-[10%] xl:w-[70%] xl:ml-[15%] mt-10">
          <MyButton
            onClick={onFinish}
            text="Upload"
            mdh="h-[35px]"
            mdw="w-[120px]"
            bgColor="bg-[#23262d]"
            textColor="text-white"
          />
        </div>
      </div>

      <Modal
        open={previewOpen}
        title={previewTitle}
        width="55%"
        footer={null}
        onCancel={() => {
          setPreviewOpen(false);
        }}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
}
