import { Card, Layout, Row } from 'antd';
import { FC } from 'react';
import RegistrationForm from '../compenents/RegistrationForm';

const Registration: FC = () => {
  return (
    <Layout>
      <Row
        justify="center"
        align="middle"
        style={{ height: ' calc(100vh - 64px)' }}
        className="login__container">
        <Card>
          <RegistrationForm />
        </Card>
      </Row>
    </Layout>
  );
};

export default Registration;
