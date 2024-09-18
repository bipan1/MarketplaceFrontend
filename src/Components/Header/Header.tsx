import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import { IoIosHelpCircleOutline } from "react-icons/io";
import { categories, categoryType } from "../../Helpers/Constants";
import { Button } from "antd";

type Props = {}

const Header = (props: Props) => {

  const navigate = useNavigate();
  return (
    <div className="bg-gray-700 text-white">
        <nav className=" relative container mx-auto p-2">
        <div className=" flex items-center justify-between">
        <FaHome size={20} className="hover:cursor-pointer" onClick={() => navigate("/")} />
         {
          categories.map((category: categoryType) => <>
          <p className="hover:cursor-pointer" onClick={() => navigate(`/${category.value}`)}>{category.label}</p>
          </>)
         }
         <Button onClick={() => navigate("/login")} className="bg-green-600 text-white">Login</Button>
         <Button onClick={() => navigate("/register")} className="bg-green-600 text-white">Signup</Button>
         {/* <IoIosHelpCircleOutline /> */}
      </div>
    </nav>
    </div>
    
  )
}

export default Header