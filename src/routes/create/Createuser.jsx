import { Button, Form, Input, Typography } from "antd";
import { useCreateUsersMutation } from "../../redux/api/createUserApi";
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
   <Form
      className="p-4 w-[400px] "
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
      <Form.Item
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

      <Form.Item
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
        <Button  type="primary" htmlType="submit">
          Create User
        </Button>
      </Form.Item>
        
    </Form>
    </>
  )
}
export default Createuser