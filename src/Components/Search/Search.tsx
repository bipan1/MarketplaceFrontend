

import { Button, Space } from "antd";
import { FaSearch } from "react-icons/fa";
import { IoIosOptions } from "react-icons/io";
import { categories, categoryType } from "../../Helpers/Constants";
import { useNavigate } from 'react-router-dom';
import AddressForm from "../FormComponents/AddressForm/AddressForm";

type Props = {}

const Search = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className="bg-green-600 p-5 justify-center">
      <div className="flex justify-center mb-5">
        <Button onClick={() => navigate('/create')} className="w-40 h-12 text-lg font-bold float-right">Post an Ad</Button>
      </div>
      <div className="flex justify-center">
          <Space.Compact>
          <form className="flex items-center relative">
          <div className="flex items-center bg-white pl-2 rounded-l-lg">
            <IoIosOptions size={25} className="text-gray-900 text-lg mr-3" />
            <select className="min-h-14 rounded-l-lg bg-white border-r-2 border-gray-300 relative outline-none">
              {categories.map((category: categoryType) => (
                <option key={category.value}>{category.label}</option>
              ))}
            </select>
          </div>
              <input placeholder="I am looking for..." className="min-h-14 border-r-2 border-gray-300 p-2 outline-none" />
              <AddressForm  classNames="min-h-14 border-r-2 pl-8 border-gray-300" />
              <select className="min-h-14 bg-white outline-none">
                {categories.map((category : categoryType) => <>
                  <option key={category.value}>{category.label}</option>
                </>)}
              </select>
              <Button htmlType="submit" className="min-h-14 rounded-none rounded-r-lg bg-green-600  text-white">
                <FaSearch size={20}/>
              </Button>
          </form>
        </Space.Compact>
      </div>
      
        
    </div>
  )
}

export default Search