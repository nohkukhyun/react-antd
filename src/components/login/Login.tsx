import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './login.styled'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import * as login from '@store/auth/auth.action'
import { authTokenExpiredCheck } from '@src/utils/common'
import Logo from '../common/logo'

const Login = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const onFinish = (values) => {
    let data = {}
    data = {
      ...values,
    }
    setLoading(true)
    dispatch(login.postAuthLoginAsync.request(data))
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {}, [])

  return (
    <S.LoginWrap>
      <S.LoginWrapBody>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src="/21c.png" width="120" />
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          style={{ width: 300 }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item> */}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </S.LoginWrapBody>
    </S.LoginWrap>
  )
}

export default Login
