import React, { FC } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { privateRoutes } from '../router';
import { publicRoutes } from './../router/index';

import { useAppSelector } from '../hooks/redux';
import Shop from '../pages/Shop';
const AppRouter: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.auth);
  return (
    <>
      <Routes>
        {privateRoutes.map((route) => (
          <Route path={route.path} element={<route.component />} key={route.path} />
        ))}
        <Route path="*" element={<Navigate to="/shop" replace />} />
      </Routes>
    </>
  );
};

export default AppRouter;

// return isAuth ? (
//   <Routes>
//     {privateRoutes.map((route) => (
//       <Route path={route.path} element={<route.component />} key={route.path} />
//     ))}
//     <Route path="*" element={<Navigate to="/" replace />} />
//   </Routes>
// ) : (
//   <Routes>
//     {publicRoutes.map((route) => (
//       <Route path={route.path} element={<route.component />} key={route.path} />
//     ))}
//     <Route path="/" element={<Navigate to="/login" replace />} />
//   </Routes>
// );
