import { Button, Form, Input, Typography, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useLogInMutation } from "../../../redux/api/authApi";
import { login } from "../../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const {Title, Text} = Typography;
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginRequest, {data, isSuccess}] = useLogInMutation();

  const onFinish = (values) => {
    loginRequest(values);
  };

  useEffect(() => {
    if(isSuccess){  
      dispatch(login({token: data.token}))
      notification.success({
        message: "Successfully logged in! Go ahed 😊"
      })
      navigate("/")
    }
  }, [isSuccess])

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
   
      <Form
      className="p-4 w-full "
      name="basic"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Title level={2} className="text-center">Login</Title>
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
          Login
        </Button>
      </Form.Item>
        <Text>account does not exist ? <Link to="/auth/signup">Sign Up</Link></Text>
    </Form>

  );
};
export default Login;