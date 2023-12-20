import { useEffect, useState } from "react";
import { Form, Button, message, Upload, Modal, notification, Card } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import axios from "axios";
import MyButton from "../../components/button";

export default function BrandingImage() {
  const [nameFileList, setNameFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [prevImages, setPrevImages] = useState(null);

  const [form] = Form.useForm();
  const token = useSelector((state) => state.AuthReducer.token);
  const darkMode = useSelector((state) => state.AuthReducer.darkMode);

  const formItemLayout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };

  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 24,
        offset: 0,
      },
    },
  };

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
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
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChangeNameFile = ({ fileList: newFileList }) => {
    if (Array.isArray(newFileList) && newFileList.length !== 0) {
      setNameFileList([...nameFileList, newFileList]);
    }
  };

  useEffect(() => {
    if (token) getLIst();
  }, [token]);

  const getLIst = () => {
    axios
      .get("http://localhost:8000/ui/branding-images/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((d) => {
        console.log("rtrt", d.data);
        setPrevImages(d.data);
      })
      .catch((e) => {
        notification["error"]({
          message: "Error !!",
          description: "Something went wrong, try again.",
        });
      });
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const buttonItemLayout = {
    wrapperCol: {
      span: 8,
      offset: 0,
    },
  };

  const onFinish = (values) => {
    let data = new FormData();
    if (values.fieldNames) {
      values.fieldNames.forEach((d) => data.append("img", d.last.file));
    }
    setLoading(true);
    axios({
      url: "http://localhost:8000/ui/branding-images/",
      method: "POST",
      data,
      headers: {
        Authorization: `Token ${token}`,
        // Accept: "application/json",
      },
    })
      .then((d) => {
        setNameFileList([]);
        form.resetFields();
        setLoading(false);
        getLIst();
        notification["success"]({
          message: "Success !!",
          description: "Branding images added",
        });
      })
      .catch((e) => {
        setLoading(false);
        notification["error"]({
          message: "Error !!",
          description: "Something went wrong, try again.",
        });
      });
  };

  const deleteImg = (id) => {
    axios
      .delete(`http://localhost:8000/ui/branding-images/${id}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((d) => {
        console.log("rtrt", d.data);
        let aa = prevImages.filter((d) => d.id !== id);
        setPrevImages(aa);
        notification["success"]({
          message: "Success !!",
          description: "Image removed.",
        });
      })
      .catch((e) => {
        notification["error"]({
          message: "Error !!",
          description: "Something went wrong, try again.",
        });
      });
  };

  return (
    <>
      <div className="w-full bg-[reed]">
        <div className="flex bg-[redd] justify-between w-full md:w-3/5 items-center">
          <h2>Branding Images</h2>
        </div>
        {/* <div className="mt-8"> */}
        <Card title="Previous Added Images">
          {prevImages?.map((d) => (
            <div key={d.id} className="flex mb-2 bg-[#fafafa] w-full">
              <div className="w-1/2 h-[140px]">
                <img
                  src={d.img}
                  alt={d.img}
                  className="h-full bg-[green] object-contain"
                />
              </div>
              <div className="w-1/2 h-[140px] flex items-center">
                <MyButton
                  text="Detail"
                  onClick={() => {
                    deleteImg(d.id);
                  }}
                  type="submit"
                  mdh="h-[35px]"
                  mdw="w-[120px]"
                  bgColor={`${darkMode ? "bg-red-500" : "bg-[#40a9ff]"}`}
                  textColor="text-white"
                />
              </div>
            </div>
          ))}
        </Card>
        <Card className="mt-10" title="Add New Images">
          <Form
            {...formItemLayout}
            layout="vertical"
            form={form}
            scrollToFirstError
            onFinish={onFinish}
            className="bg-white w-full px-8 pt-0 pb-4 rounded-lg"
          >
            <Form.List name="fieldNames">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "50%",
                      }}
                      key={key}
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "last"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing images",
                          },
                        ]}
                      >
                        <Upload
                          beforeUpload={beforeUpload}
                          showUploadList={{ showRemoveIcon: false }}
                          listType="picture-card"
                          fileList={nameFileList[key]}
                          onPreview={handlePreview}
                          onChange={handleChangeNameFile}
                          onRemove={() => {
                            let de = nameFileList.filter((d) => d !== d[key]);
                            setNameFileList(de);
                          }}
                        >
                          {/* {uploadButton} */}
                          {nameFileList[key]
                            ? nameFileList[key].length >= 1
                              ? null
                              : uploadButton
                            : uploadButton}
                        </Upload>
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </div>
                  ))}
                  <Form.Item {...formItemLayoutWithOutLabel}>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      // block
                      icon={<PlusOutlined />}
                    >
                      Add images
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <br />
            <Form.Item {...buttonItemLayout}>
              <Button htmlType="submit" type="primary">
                Add Branding Images
              </Button>
            </Form.Item>
          </Form>
        </Card>
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
