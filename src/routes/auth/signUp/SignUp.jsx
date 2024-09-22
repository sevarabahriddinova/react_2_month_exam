import { Button, Form, Input, Typography, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import { signUp } from "../../../redux/slices/authSlice";
import { useSignUpMutation } from "../../../redux/api/authApi";
import { TbBrandGravatar } from "react-icons/tb";

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
        message: "Successfully registered!"
       })
      navigate("/auth/login")
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
      <Text>you have an account? <Link to="/auth/login">Log in</Link></Text>
    </Form>
   </div>
  );
};

export default SignUp;
