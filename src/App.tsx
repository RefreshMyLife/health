import React, { FC } from 'react';
import AppRouter from './compenents/AppRouter';
import Navbar from './compenents/Navbar';
import { Content, Footer } from 'antd/es/layout/layout';
import { Layout, Space } from 'antd';
import './App.css';
const App: FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Navbar />
        <Content>
          <AppRouter />
        </Content>
        {/* <Footer>footer</Footer> */}
      </Layout>
    </Space>
  );
};

export default App;
