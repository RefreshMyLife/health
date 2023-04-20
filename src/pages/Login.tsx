import { Card, Layout, Row } from 'antd';
import { FC } from 'react';
import LoginForm from '../compenents/LoginForm/LoginForm';

const Login: FC = () => {
  return (
    <Layout>
      <Row
        justify="center"
        align="middle"
        style={{ height: ' calc(100vh - 64px)' }}
        className="login__container">
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
