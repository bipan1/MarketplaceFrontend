

import { Button, Space } from "antd";
import { FaSearch } from "react-icons/fa";
import { IoIosOptions } from "react-icons/io";
import { categories, categoryType } from "../../Helpers/Constants";

type Props = {}

const Search = (props: Props) => {
  return (
    <div className="bg-green-600 p-5 justify-center">
      <Button className="" >Post Ad</Button>
      <div className="flex justify-center">
          <Space.Compact>
          <form className="flex items-center relative">
          <div className="relative">
            <IoIosOptions size={20} className="absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none" />
            <select className="min-h-14 pl-10 bg-white border-r-2 border-gray-300 relative">
              {categories.map((category: categoryType) => (
                <option key={category.value}>{category.label}</option>
              ))}
            </select>
          </div>
              <input placeholder="I am looking for..." className="min-h-14 border-r-2 border-gray-300" />
              <input className="min-h-14 border-r-2 border-gray-300" />
              <select className="min-h-14 bg-white">
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