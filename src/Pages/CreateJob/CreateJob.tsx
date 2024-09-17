import { Form, Input, Select } from 'antd'
import { jobTypes, salaryTypes } from '../../Helpers/Constants';
import MyEditor from '../../Components/FormComponents/TextEditor/TextEditor';
import AddressForm from '../../Components/FormComponents/AddressForm/AddressForm';
import ContactForm from '../../Components/FormComponents/ContactForm/ContactForm';
import ImageForm from '../../Components/FormComponents/ImageForm/ImageForm';
import CategoryForm from '../../Components/FormComponents/CategoryForm/CategoryForm';

type Props = {}

const CreateJob = (props: Props) => {
  return (
    <div className='mx-auto w-2/5 mt-10 mb-10'>
        <p className='text-2xl font-bold mb-4'>About the job</p>
        <Form layout='vertical' className=''>
            <Form.Item
                name="title"
                label={<p className='text-lg '>Title</p>}
                required={true}
            >
                <Input size="large" className='min-h-12'/>
            </Form.Item>

            <CategoryForm />

            <Form.Item
                name="jobType"
                label={<p className='text-lg '>Job Type</p>}
                required={true}
            >
                <Select className='min-h-12' options={jobTypes} size='large'/>
            </Form.Item>
            <p className='text-2xl font-bold mb-4'>Salary Information</p>

            <Form.Item
                name="salaryType"
                label={<p className='text-lg'>Salary Type</p>}
                required={true}
            >
                <Select className='min-h-12' options={salaryTypes} size='large'/>
            </Form.Item>

            <Form.Item
                name="salary"
                label={<p className='text-lg'>Salary</p>}
                required={true}
            >
                <Input className='min-h-12' size='large'/>
            </Form.Item>

            <ImageForm />

            <p className='text-2xl font-bold mb-4'>Job Description</p>
            <Form.Item
                name="description"
                required={true}
            >
               <MyEditor />
            </Form.Item>


            <Form.Item
                name="address"
                label={<p className='text-lg'>Address</p>}
            >
                <AddressForm classNames="p-2 min-h-12 border border-gray-300 rounded-lg w-full hover:border-blue-400"/>
            </Form.Item>

            <ContactForm />
           
            

        </Form>
    </div>
  )
}

export default CreateJob