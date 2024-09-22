import { Link } from "react-router-dom";


const Header = () => {



  return (
    <div className=" ">
      <h2 className=" ">Home</h2>
      <ul>
        <li className=" "><Link to="/">Home</Link></li>
        <li className=" "><Link to="/auth/login"> Login</Link></li>
        <li className=" "><Link to="/auth/signup"> Register</Link></li>
      </ul>
    </div>
  );
};

export default Header;
