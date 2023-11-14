import MyButton from "../../components/button";
import {
  Form,
  Input,
  notification,
  Card,
  Row,
  Col,
  Upload,
  Modal,
  message,
} from "antd";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

export default function ManagePromotions() {
  const [form] = Form.useForm();

  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.AuthReducer.token);

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
      file.preview = await getBase64(file.originFileObj);
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
      <div className="ml-2">Upload</div>
    </div>
  );

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 10 },
      xl: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 14 },
      xl: { span: 16 },
    },
  };
  const onFinish = (values) => {
    console.log(values);
    setLoading(true);

    const promotionImg = fileList[0]?.originFileObj;

    let data = new FormData();

    data.append("img", promotionImg);
    data.append("title", values.title);
    data.append("des", values.description);
    data.append("redeem_points", values.points);
    data.append("user_limit", values.user_limit);
    data.append("promotion_limit", values.promotion_limit);

    axios({
      url: "https://api-dev.skzicph.com/qr/promotions/",
      method: "POST",
      data,
      headers: {
        Authorization: `Token ${token}`,
        // Accept: "application/json",
      },
    })
      // axios
      //   .post(
      //     "https://api-dev.skzicph.com/qr/promotions/",
      //     {
      //       title: values.title,
      //       des: values.description,
      //       redeem_points: values.points,
      //       user_limit: values.user_limit,
      //       promotion_limit: values.promotion_limit,
      //     },
      //     {
      //       headers: {
      //         Authorization: `Token ${token}`,
      //       },
      //     }
      //   )
      .then((d) => {
        setLoading(false);
        form.resetFields();
        notification["success"]({
          message: "Success",
          description: "New promotion created.",
        });
      })
      .catch((e) => {
        console.log(e.response);
        setLoading(false);
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
          <h2>Manage Promotions</h2>
          {/* <MyButton
          text="List"
          mdh="h-[35px]"
          mdw="w-[80px]"
          bgColor="bg-[#23262d]"
          textColor="text-white"
        /> */}
        </div>
        <div>
          <Form
            labelAlign="left"
            form={form}
            {...formItemLayout}
            onFinish={onFinish}
          >
            <Row gutter={[16, 16]}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <Card loading={loading}>
                  <br />
                  <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                      {
                        required: true,
                        message: "Please input warehouse name",
                      },
                    ]}
                  >
                    <Input placeholder="Title" />
                  </Form.Item>

                  <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: "Please input description",
                      },
                    ]}
                  >
                    <TextArea placeholder="Description" />
                  </Form.Item>

                  <Form.Item
                    label="Promotion Image"
                    name="img"
                    rules={[
                      {
                        required: true,
                        message: "Please upload an image.",
                      },
                    ]}
                  >
                    <Upload
                      beforeUpload={beforeUpload}
                      fileList={fileList}
                      listType="picture-card"
                      onPreview={handlePreview}
                      onChange={handleChange}
                    >
                      {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                  </Form.Item>
                </Card>
              </Col>
              <Col
                xs={{ span: 24 }}
                // sm={{ span: 24 }}
                md={{ span: 12 }}
                // lg={{ span: 12 }}
                // xl={{ span: 12 }}
              >
                <Card loading={loading}>
                  <br />
                  <Form.Item
                    label="Redeem Points"
                    name="points"
                    rules={[
                      {
                        required: true,
                        message: "Please input redeem Ipoints",
                      },
                    ]}
                  >
                    <Input placeholder="Redeem Points " />
                  </Form.Item>

                  <Form.Item
                    label="Promotion Limit"
                    name="promotion_limit"
                    rules={[
                      {
                        required: true,
                        message: "Please input promotions limit",
                      },
                    ]}
                  >
                    <Input placeholder="Promotion Limit" />
                  </Form.Item>

                  <Form.Item
                    label="Users Limit"
                    name="user_limit"
                    rules={[
                      {
                        required: true,
                        message: "Please input user limit",
                      },
                    ]}
                  >
                    <Input placeholder="User Limit" />
                  </Form.Item>
                </Card>
              </Col>
            </Row>
            <br />
            <div className={`${loading ? "hidden" : "block" + "ml-6"}`}>
              <MyButton
                text="Create Promotions"
                mdh="h-[35px]"
                mdw="w-[180px]"
                bgColor="bg-[#23262d]"
                textColor="text-white"
              />
            </div>
          </Form>
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
