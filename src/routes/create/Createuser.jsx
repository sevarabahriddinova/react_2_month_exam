import { Button, Form, Input, Typography } from "antd";
import { useCreateUsersMutation } from "../../redux/api/productsApi";
const {Title} = Typography;

const Createuser = () =>{
  const [createUsers] = useCreateUsersMutation();

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
      const onFinish = (values) => {
        createUsers(values);
      }; 
  return(
    <>
   <div className="w-[1200px] m-auto mt-14">
   <Form
      className="p-6 w-[400px] m-auto  bg-purple-400 rounded-xl  flex flex-col items-center "
      name="basic"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Title level={2} className="text-center">Craete Users</Title>
      <Form.Item className="w-full"
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: " your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item className="w-full"
        label="Pasword"
        name="pasword"
        rules={[
          {
            required: true,
            message: "enter your workplace",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button  className="text-center w-full" type="primary" htmlType="submit">
          Create User
        </Button>
      </Form.Item>
        
    </Form>
   </div>
    </>
  )
}
export default Createuser