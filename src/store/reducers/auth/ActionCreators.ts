import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';
import AuthService from '../../../services/AuthServices';

export const authLoginUser = createAsyncThunk<IUser, IUser>('auth/login', async (params) => {
  try {
    const { username, password } = params;

    const { data } = await AuthService.login(username, password);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const authLoginUserTest = createAsyncThunk<IUser, IUser>('auth/login', async (params) => {
  try {
    const { username, password } = params;

    const { data } = await AuthService.login(username, password);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});
