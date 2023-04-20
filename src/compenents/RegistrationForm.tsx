import { Button, Checkbox, Form, Input, Select } from 'antd';
import React from 'react';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 80 }}>
        <Option value="375">+375</Option>
        <Option value="380">+380</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{ maxWidth: 600, minWidth: 487 }}
      scrollToFirstError>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'Введен неверный E-mail!',
          },
          {
            required: true,
            message: 'Пожалуйста, введите свой E-mail!',
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Пароль"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите свой E-mail!',
          },
        ]}
        hasFeedback>
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Подтвердить Пароль"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Пожалуйста, подтвердите свой пароль!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Два введенных вами пароля не совпадают!'));
            },
          }),
        ]}>
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="Имя Пользователя"
        tooltip="Как вы хотите, чтобы другие называли вас?"
        rules={[{ required: true, message: 'Пожалуйста, введите ваш никнейм!', whitespace: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Номер Телефона"
        rules={[{ required: true, message: 'Пожалуйста, введите свой номер телефона!' }]}>
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Гендер"
        rules={[{ required: true, message: 'Please select gender!' }]}>
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="f-16">F-16 Raptor</Option>
          <Option value="Halicoptor">Halicoptor Apachi</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      {/* Реализовать капчу??? */}
      {/* <Form.Item label="Captcha" extra="We must make sure that your are a human.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[{ required: true, message: 'Please input the captcha you got!' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item> */}

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Следует принять соглашение')),
          },
        ]}
        {...tailFormItemLayout}>
        <Checkbox>Я со всем согласен</Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
