import { Form, Input, Switch } from 'antd'

type Props = {}

const ContactForm = (props: Props) => {
  return (
    <>
    <p className='text-xl font-bold pb-2 mb-2'>Contact number</p>

            <div className='border border-gray-300 rounded-lg'>
                 <Form.Item
                    className='!mb-0'
                    name="contactnumber"
                >
                    <Input className='!border-0' size='large' placeholder='Enter contact number'/>
                </Form.Item>
                <div className='border-t border-gray-300 p-2  flex justify-between'>
                    <p className='text-md font-bold'>Show this number in the ad?</p>
                    <Form.Item className='mb-0'  valuePropName="checked">
                        <Switch />
                    </Form.Item>
                </div>
            </div>
            </>
  )
}

export default ContactForm