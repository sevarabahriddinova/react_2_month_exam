import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../../redux/api/productsApi";
// import { Container } from "../../utils";
import { Card, Typography, Spin } from 'antd';
import { TbBrandGravatar } from "react-icons/tb";

import { Link } from "react-router-dom";

const { Meta } = Card;
const { Text } = Typography;

const users = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetUserByIdQuery(id);

  console.log(data);

  if (isLoading) return <p className="text-center mt-40">Loading...</p>;
  if (isError) return <div>Error loading user details.</div>;

  const user = data?.data;

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

    



      <div className='w-[1200px] m-auto my-10 flex '>

        <div className="m-auto">
          {user && (
            <Card
              key={user.id}
              className=' bg-white shadow-2xl'
            >
              <div className='relative'>
                <img
                  alt={`${user.first_name} ${user.last_name}`}
                  src={user.avatar}
                  className='w-full  object-cover rounded-t-lg'
                />
              </div>
              <div className='p-4'>
                <Meta
                  title={<span className='text-lg  font-bold text-blue-900'>{`${user.first_name} ${user.last_name}`}</span>}
                  description={<span className='text-gray-600'>{user.email}</span>}
                />
              </div>
            </Card>
          )}
        </div>

      </div>
  </div>
    


  );
}


export default users;