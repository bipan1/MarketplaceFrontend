import { Button, Card, Checkbox, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <div className="mt-10 flex items-center px-3 justify-center">
      <Card className="w-full max-w-md shadow-lg p-4">
        <h2 className="text-lg text-center pb-3">Log in to your account</h2>
        <Form name="login" layout="vertical">
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input size='large' prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
              size='large'
            />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-between">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="text-blue-500 underline" href="">
                Forgot password?
              </a>
            </div>
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              // loading={loading}
              className="w-full h-12 !bg-green-600 !text-white mb-3"
            >
              <span className="ml-3">Login</span>
            </Button>
          </Form.Item>
        </Form>

        <p className="text-center">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500 underline">
            Sign Up
          </a>
        </p>
      </Card>
    </div>
  )
}

export default LoginPage