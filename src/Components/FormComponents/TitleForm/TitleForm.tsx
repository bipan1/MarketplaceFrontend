import { Form, Input } from 'antd'

type Props = {}

const TitleForm = (props: Props) => {
  return (
    <div>
         <Form.Item
                name="title"
                label={<p className='text-lg '>Title</p>}
                required={true}
            >
                <Input size="large" className='min-h-12' placeholder='Enter title'/>
            </Form.Item>
    </div>
  )
}

export default TitleForm