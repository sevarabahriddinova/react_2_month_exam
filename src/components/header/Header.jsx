import { Link } from "react-router-dom";
import { TbBrandGravatar } from "react-icons/tb";

const Header = () => {



  return (
    <div className="bg-purple-400 p-4 shadow-2xl">

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


        <ul className="flex gap-6">
          <li className=" text-green-900 font-bold text-2xl"><Link to="/auth/login"> Login</Link></li>
          <li className=" text-green-900 font-bold text-2xl"><Link to="/auth/signup"> Register</Link></li>
          <li className=" text-green-900 font-bold text-2xl"><Link to="/routes/create">Create</Link></li>
        </ul>
      </div>

    </div>
  );
};

export default Header;
