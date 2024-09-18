import { Button, Form, Input, Select } from 'antd'
import { jobTypes, salaryTypes } from '../../Helpers/Constants';
import MyEditor from '../../Components/FormComponents/TextEditor/TextEditor';
import AddressForm from '../../Components/FormComponents/AddressForm/AddressForm';
import ContactForm from '../../Components/FormComponents/ContactForm/ContactForm';
import ImageForm from '../../Components/FormComponents/ImageForm/ImageForm';
import CategoryForm from '../../Components/FormComponents/CategoryForm/CategoryForm';
import { useNavigate } from 'react-router';
import { jobPostAPI } from '../../Services/JobService';
import { useState } from 'react';
import { JobPost } from '../../Models/Job';
import { objectToFormData } from '../../Helpers/MapFormData';
import TitleForm from '../../Components/FormComponents/TitleForm/TitleForm';
import SubmitForm from '../../Components/FormComponents/SubmitForm/SubmitForm';

type Props = {}

const Createclothing = (props: Props) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleSubmit = async(values : JobPost) => {
        setLoading(true);
        const formData = objectToFormData(values);
        const response = await jobPostAPI(formData);
        setLoading(false);
    }

  return (
    <div className='mx-auto w-2/5 mt-10 mb-10'>
        <p className='text-2xl font-bold mb-4'>Title, Category and Price</p>
        <Form form={form} layout='vertical' onFinish={handleSubmit} className=''>

            <TitleForm />
            <CategoryForm category="Clothing and Jewellery" handleChangeCategory={() => navigate("/create")}/>

            <Form.Item
                name="price"
                label={<p className='text-lg '>Your price</p>}
                required={true}
            >
                <Input placeholder="Enter your price" className='min-h-12' size='large'/>
            </Form.Item>

            <ImageForm form={form}/>
            
            <p className='text-2xl font-bold mb-4'>Description</p>
            <Form.Item
                name="description"
                required={true}
            >
               <MyEditor form={form}/>
            </Form.Item>


            <Form.Item
                name="address"
                label={<p className='text-lg'>Address</p>}
            >
                <AddressForm  form={form} classNames="pl-8 min-h-12 border border-gray-300 rounded-lg w-full hover:border-blue-400"/>
            </Form.Item>

            <ContactForm />
           
            <SubmitForm loading={loading}/>

        </Form>
    </div>
  )
}

export default Createclothing