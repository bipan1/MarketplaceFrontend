import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import { IoIosHelpCircleOutline } from "react-icons/io";
import { categories, categoryType } from "../../Helpers/Constants";

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="bg-gray-700 text-white">
        <nav className=" relative container mx-auto p-2">
      <div className=" flex items-center justify-between">
        <FaHome />
         {
          categories.map((category: categoryType) => <>
          <p>{category.label}</p>
          </>)
         }
         <IoIosHelpCircleOutline />
      </div>
    </nav>
    </div>
    
  )
}

export default Header