import { MdKeyboardArrowRight } from 'react-icons/md'

type Props = {
  handleChangeCategory : () => void;
  category : string;
}

const CategoryForm = ({handleChangeCategory, category}: Props) => {
  return (
    <div onClick={handleChangeCategory}>
        <div className='rounded-md border !border-gray-300 p-2 mb-4 hover:cursor-pointer hover:border-blue-400'>
                <div className='flex justify-between '>
                    <div>
                        <p className='text-sm font-bold text-gray-500'>Category</p>
                        <p className='text-lg font-bold'>{category}</p>
                    </div>
                    <div>
                        <MdKeyboardArrowRight size={36}/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CategoryForm