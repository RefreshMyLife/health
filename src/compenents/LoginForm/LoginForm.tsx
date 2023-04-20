import { Button, Checkbox, Form, Input } from 'antd';
import { FC } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { authLoginUser } from '../../store/reducers/auth/ActionCreators';
import { IUser } from './../../models/IUser';
import { useAppDispatch } from './../../hooks/redux';
import { ThunkDispatch } from 'redux-thunk';
import AuthService from '../../services/AuthServices';
import { Link } from 'react-router-dom';
import { RouteName } from '../../router';

const LoginForm: FC = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const onFinish = async (values: IUser) => {
    const { data } = await AuthService.login(values.username, values.password);
    console.log(data);
    dispatch(authLoginUser(values));
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Пожалуйста введите имя пользователя!' }]}>
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Имя пользователя"
          value="user"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Пожалуйста введите ваш пароль!' }]}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"
          value="111"
        />
      </Form.Item>
      <Form.Item>
        <a className="login-form-forgot" href="">
          Забыли пароль
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Войти
        </Button>
        Или <Link to={RouteName.REGISTRATION}> регистрируйся сейчас!</Link>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;

{
  /* <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item> */
}
