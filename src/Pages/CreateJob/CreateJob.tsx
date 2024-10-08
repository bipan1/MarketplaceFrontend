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

const CreateJob = (props: Props) => {
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
        <p className='text-2xl font-bold mb-4'>About the job</p>
        <Form form={form} layout='vertical' onFinish={handleSubmit} className=''>

            <TitleForm />
            <CategoryForm category="Create a job" handleChangeCategory={() => navigate("/create")}/>

            <Form.Item
                name="jobType"
                label={<p className='text-lg '>Job Type</p>}
                required={true}
            >
                <Select placeholder="Select job type" className='min-h-12' options={jobTypes} size='large'/>
            </Form.Item>

            <p className='text-2xl font-bold mb-4'>Salary Information</p>
            <Form.Item
                name="salaryType"
                label={<p className='text-lg'>Salary Type</p>}
                required={true}
            >
                <Select className='min-h-12' placeholder="Select Salary Type" options={salaryTypes} size='large'/>
            </Form.Item>

            <Form.Item
                name="salary"
                label={<p className='text-lg'>Salary</p>}
                required={true}
            >
                <Input placeholder='Enter Salary' className='min-h-12' size='large'/>
            </Form.Item>

            <ImageForm form={form}/>
            
            <p className='text-2xl font-bold mb-4'>Job Description</p>
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

export default CreateJob