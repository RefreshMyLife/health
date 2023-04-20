import { Menu } from 'antd';
import Layout, { Header } from 'antd/es/layout/layout';
import Row from 'antd/es/row';
import React, { FC } from 'react';
import { useNavigate, redirect, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { RouteName } from '../router';
import { useDispatch } from 'react-redux';
import { authSlice } from '../store/reducers/auth/auth';

const Navbar: FC = () => {
  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  // const { auth } = authSlice.actions;
  // const { isAuth, user } = useAppSelector((state) => state.auth);
  console.log('Navbar');
  // const handleClickLogout = () => {
  //   dispatch(auth(false));
  //   navigate(RouteName.LOGIN);
  //   console.log('false');
  // };
  const publicMenuItems = [
    {
      key: '1',
      label: 'Логин',
      // onClick: () => navigate(RouteName.LOGIN),
    },
    {
      key: '2',
      label: 'Регистрация',
    },
  ];

  const privateMenuItems = [
    {
      key: '1',
      label: <Link to={RouteName.EXERCISES}>Упражнения</Link>,
    },
    {
      key: '2',
      label: <Link to={RouteName.SHOP}>Магазин</Link>,
    },
    {
      key: '3',
      label: <Link to={RouteName.AUDIOPLAYER}>Аудиплеер</Link>,
    },
    {
      key: '4',
      label: <Link to={RouteName.PERSONALAREA}>Личный кабинет</Link>,
    },
    {
      key: '5',
      label: <Link to={RouteName.EVENTCALENDAR}>Календарь</Link>,
    },
    {
      key: '6',
      // label: <div style={{ color: 'white' }}> {user ? user.username : 'yser'}</div>,

      disabled: true,
    },
    {
      key: '7',
      label: 'Выйти',
      // onClick: () => handleClickLogout(),
    },
  ];

  return (
    <Header>
      <Row justify={'end'}>
        <Menu
          style={{ display: 'flex', justifyContent: 'flex-end', minWidth: 0, flex: 'auto' }}
          theme="dark"
          mode="horizontal"
          items={privateMenuItems}></Menu>

        {/* {isAuth ? (
          <Menu
            style={{ display: 'flex', justifyContent: 'flex-end', minWidth: 0, flex: 'auto' }}
            theme="dark"
            mode="horizontal"
            items={privateMenuItems}></Menu>
        ) : (
          <Menu
            style={{ display: 'flex', justifyContent: 'flex-end', minWidth: 0, flex: 'auto' }}
            theme="dark"
            mode="horizontal"
            items={publicMenuItems}></Menu>
        )} */}
      </Row>
    </Header>
  );
};

export default Navbar;

// <Menu.Item onClick={() => navigate(RouteName.LOGIN)} key={1}>
// Логин
// </Menu.Item>
// <Menu.Item key={2}>Реги</Menu.Item>

// const privateMenuItems = [
//   {
//     key: '1',
//     //  icon: <UserOutlined />,
//     label: 'Имя',
//     selectable: false,
//     mode: 'horizontal',
//   },
//   {
//     key: '2',
//     // icon: <SettingOutlined />,
//     label: 'Выйти',
//     onClick: () => navigate(RouteName.LOGIN),
//     mode: 'horizontal',
//   },
// ];
