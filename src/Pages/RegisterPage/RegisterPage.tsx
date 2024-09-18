import { Button, Card, Form, Input } from 'antd'
import React from 'react'

type Props = {}

const RegisterPage = (props: Props) => {
  return (
    <div className="mt-10 flex items-center px-3 justify-center">
      <Card className="w-full max-w-md shadow-lg m-2">
        <h2 className="pb-3 text-lg text-center">Sign Up to create an account.</h2>
        <Form name="normal_login" layout="vertical">
          <Form.Item
            name="name"
            label="Full name"
            rules={[
              {
                required: true,
                message: 'Please input your full name!',
              },
            ]}
          >
            <Input size='large' placeholder="Full name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: 'Please enter email!',
              },
            ]}
          >
            <Input size='large' placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
              {
                min: 8,
                message: "Password length should be atleast 8."
              }
            ]}
          >
            <Input
            size='large'
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button htmlType='submit' className="w-full h-12 !bg-green-600 !text-white  mb-3">
              <span className="ml-3">Sign Up</span>
            </Button>
          </Form.Item>
        </Form>

        <p className='text-center'>Already have an account? <a href='/login' className='text-blue-500 underline'>Log in</a></p>
      </Card>
    </div>
  )
}

export default RegisterPage