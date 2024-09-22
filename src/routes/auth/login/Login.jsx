import { Button, Form, Input, Typography, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useLogInMutation } from "../../../redux/api/authApi";
import { logIn } from "../../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { TbBrandGravatar } from "react-icons/tb";


const {Title, Text} = Typography;
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginRequest, {data, isSuccess}] = useLogInMutation();

  const onFinish = (values) => {
    loginRequest(values);
  };

  // charles.morris@reqres.in

  useEffect(() => {
    if(isSuccess){  
      dispatch(logIn({token: data.token}))
      notification.success({
        message: "Successfully registered!"
      })
      navigate("/")
    }
  }, [isSuccess])

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
   
      <div>

<div className="bg-purple-400 p-4 shadow-2xl ">
      <div className=" flex items-center justify-between w-[1200px] m-auto">
        <Link to={"/"} >
          <div className='flex px-2 shadow-2xl bg-gray-300 w-fit rounded-full'>
            <span className='font-bold text-[36px]  text-lime-700'>S</span>
            <div className="flex flex-col text-lg">
              <span className='font-bold mt-2 text-sm text-yellow-500'>B</span>
              <span><TbBrandGravatar className="text-yellow-600  absolute" /></span>
            </div >
            <span className='font-bold  text-[22px]  left-[44px] mt-2 text-green-700'>M</span>
         </div></Link>
      </div>
    </div>

        <Form
      className="p-6 w-[400px] shadow-2xl rounded-lg bg-slate-400 m-auto mt-12"
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
            message: "Enter email!",
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
            message: "Enter password!",
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

      </div>
  );
};
export default Login;