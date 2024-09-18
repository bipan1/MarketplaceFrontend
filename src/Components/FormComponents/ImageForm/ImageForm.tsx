import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Form, Upload } from 'antd';

const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  beforeUpload() {
    return false;
  },
  onDrop(e) {
  },
};

type Props = {
  form : any;
}

const ImageForm: React.FC<Props> = ({form} : Props) => (
  <Form.Item
      name="images"
  >
    <div className='mb-2'>
        <p className='text-2xl font-bold'>Photos</p>
        <p className='mb-4'>Uploaded 0/15 Photos</p>

        <Dragger {...props} onChange={(info) => {
          const fileList = info.fileList.map(file => file.originFileObj)
          form.setFieldsValue({images : fileList})
        }}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined color='green' />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from uploading company data or other
            banned files.
            </p>
        </Dragger>
    </div>
  </Form.Item>
    
  
);

export default ImageForm;