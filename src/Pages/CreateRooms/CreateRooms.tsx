import { Button, Form, Input, Select } from 'antd'
import { bathRoomTypes, bedRoomTypes, durationTypes, jobTypes, propertyTypes, rentTypes, salaryTypes } from '../../Helpers/Constants';
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

const CreateRooms = (props: Props) => {
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
        <p className='text-2xl font-bold mb-4'>About the Real Estate</p>
        <Form form={form} layout='vertical' onFinish={handleSubmit} className=''>

            <TitleForm />
            <CategoryForm category='Create an Real Estate Ad' handleChangeCategory={() => navigate("/create")}/>

            <div className='grid grid-cols-12 gap-2'>
                <Form.Item
                    name="rentType"
                    label={<p className='text-lg '>Enter your price</p>}
                    required={true}
                    className='col-span-8'
                >
                    <Input placeholder="Enter your price" className='min-h-12' size='large'/>
                </Form.Item>

                <Form.Item
                    name="rentType"
                    label={<p className='text-lg '>Duration</p>}
                    required={true}
                    className='col-span-4'
                >
                    <Select placeholder="Select duration type" className='min-h-12' options={durationTypes} size='large'/>
                </Form.Item>
            </div>

            <Form.Item
                name="rentType"
                label={<p className='text-lg '>Rent Type</p>}
                required={true}
            >
                <Select placeholder="Select rent type" className='min-h-12' options={rentTypes} size='large'/>
            </Form.Item>

            <p className='text-2xl font-bold mb-4'>Property Information</p>
            <Form.Item
                name="propertyType"
                label={<p className='text-lg'>Property Type</p>}
                required={true}
            >
                <Select className='min-h-12' placeholder="Select property type" options={propertyTypes} size='large'/>
            </Form.Item>

            <Form.Item
                name="propertyType"
                label={<p className='text-lg'>Bedrooms</p>}
                required={true}
            >
                <Select className='min-h-12' placeholder="Select number of bedrooms" options={bedRoomTypes} size='large'/>
            </Form.Item>

            <Form.Item
                name="propertyType"
                label={<p className='text-lg'>Bathrooms</p>}
                required={true}
            >
                <Select className='min-h-12' placeholder="Select number of bathrooms" options={bathRoomTypes} size='large'/>
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

export default CreateRooms