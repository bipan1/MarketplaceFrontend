import { Button, Card, Form, Input, Select, Upload } from 'antd'
import { MdKeyboardArrowRight } from "react-icons/md";
import { jobTypes, salaryTypes } from '../../Helpers/Constants';
import { UploadOutlined } from '@ant-design/icons';

type Props = {}

const CreateJob = (props: Props) => {

    const beforeUpload = () => {
        return false
    }
  return (
    <div className='mx-auto w-1/3 mt-10'>
        <p className='text-2xl font-bold mb-4'>About the job</p>
        <Form layout='vertical' className=''>
            <Form.Item
                name="title"
                label="Title"
                required={true}
                className='!text-2xl'
            >
                <Input size="large" className='min-h-12'/>
            </Form.Item>

            <div className='rounded-md border !border-gray-300 p-2 mb-4 hover:cursor-pointer hover:border-blue-400'>
                <div className='flex justify-between '>
                    <div>
                        <p className='text-sm text-gray-500'>Category</p>
                        <p className='text-md'>Create a Job</p>
                    </div>
                    <div>
                        <MdKeyboardArrowRight size={36}/>
                    </div>
                </div>
            </div>

            <Form.Item
                name="jobType"
                label="Job Type"
                required={true}
            >
                <Select className='min-h-12' options={jobTypes} size='large'/>
            </Form.Item>
            <p className='text-2xl font-bold mb-4'>Salary Information</p>

            <Form.Item
                name="salaryType"
                label="Salary Type"
                required={true}
            >
                <Select className='min-h-12' options={salaryTypes} size='large'/>
            </Form.Item>

            <Form.Item
                name="salary"
                label="Salary"
                required={true}
            >
                <Input className='min-h-12' size='large'/>
            </Form.Item>

            <p className='text-2xl font-bold mb-4'>Job Description</p>
            <Form.Item
                name="description"
                label="Description"
                required={true}
            >
                <Input size='large'/>
            </Form.Item>



            <p className='text-2xl font-bold'>Photos</p>
            <p className='mb-4'>Uploaded 0/15 Photos</p>

            <Form.Item
                name="images"
            >
                <Upload
                    maxCount={10}
                    listType="picture"
                    beforeUpload={beforeUpload}
                    multiple={false}
                    // defaultFileList={selectedProduct ? [selectedProduct.image] : []}
                >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="address"
                label="Address"
            >
                <Input size='large'/>
            </Form.Item>
            <Form.Item
                name="contactnumber"
                label="Contact Number"
            >
                <Input size='large'/>
            </Form.Item>
            <Form.Item
                name="photos"
                label="Photos"
            >
                <Input size='large'/>
            </Form.Item>
        </Form>
    </div>
  )
}

export default CreateJob