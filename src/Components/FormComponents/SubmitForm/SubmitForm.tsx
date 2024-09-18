import { Button } from 'antd'
import React from 'react'

type Props = {
    loading : boolean;
}

const SubmitForm = ({loading}: Props) => {
  return (
    <div className='flex justify-center mt-4'>
        <Button loading={loading} htmlType='submit' className='h-14 w-2/3 bg-green-600 text-white text-lg font-bold'>Post Ad</Button>
    </div>
  )
}

export default SubmitForm