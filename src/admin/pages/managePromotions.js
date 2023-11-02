import MyButton from "../../components/button";
import { Form, Input, notification, Card, Row, Col } from "antd";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const { TextArea } = Input;

export default function ManagePromotions() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.AuthReducer.token);

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
    axios
      .post(
        "http://localhost:8000/qr/promotions/",
        {
          title: values.title,
          des: values.description,
          redeem_points: values.points,
          user_limit: values.user_limit,
          promotion_limit: values.promotion_limit,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((d) => {
        setLoading(false);
        form.resetFields();
        notification["success"]({
          message: "Success",
          description: "New promotion created.",
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

  return (
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

                <Form.Item label="Promotion Limit" name="promotion_limit">
                  <Input placeholder="Promotion Limit" />
                </Form.Item>

                <Form.Item label="Users Limit" name="user_limit">
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
  );
}
