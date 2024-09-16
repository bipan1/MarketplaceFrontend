import { categories, categoryType } from '../../Helpers/Constants'
import { Card } from 'antd'
import { useNavigate } from 'react-router-dom';

type Props = {}

const ChooseCategory = (props: Props) => {
    const navigate = useNavigate();

    const handleCreate = (category: string) => {
        navigate('/create-job')
    }

    return (
    <div className='mx-auto w-1/2 mt-10'>
        <p className='text-2xl font-bold'>What would you like to sell?</p>
        {categories.map((category : categoryType) => <>
            <Card onClick={() => handleCreate(category.value)} className='text-lg my-3 mx-auto w-full shadow-md hover:border-green-400 hover:bg-green-100 hover:cursor-pointer hover:shadow-lg rounded-lg' key={category.value}>{category.label}</Card>
        </>)}
    </div>
    )
}

export default ChooseCategory