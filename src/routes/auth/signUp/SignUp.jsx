import { Button, Form, Input, Typography, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import { signUp } from "../../../redux/slices/authSlice";
import { useSignUpMutation } from "../../../redux/api/authApi";

const { Title, Text } = Typography;

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUpRequest, {data, isSuccess}] = useSignUpMutation();
  const onFinish = (values) => {
    signUpRequest(values)
  };

  useEffect(() => {
    if(isSuccess){
      dispatch(signUp({token: data.token}));
       notification.success({
        message: "Successfully signed up! Go ahead 😊"
       })
      navigate("/auth/login")
    }
  }, [isSuccess])

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      className="p-4 w-full"
      name="basic"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Title level={2} className="text-center">
        Sing Up
      </Title>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

     

      <Form.Item>
        <Button className="w-full" type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
      <Text>Alredy have an account? <Link to="/auth/login">Log in</Link></Text>
    </Form>
  );
};

export default SignUp;
