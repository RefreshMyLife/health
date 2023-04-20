import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';
import { Status } from '../../../models/StatusRequest';
import { authLoginUser } from './ActionCreators';

interface AuthState {
  isAuth: boolean;
  user: IUser;
  status: string;
  error: string | null | undefined | object;
}

const initialState: AuthState = {
  isAuth: false,
  status: '',
  user: {} as IUser,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authLoginUser.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(authLoginUser.fulfilled, (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(authLoginUser.rejected, (state, action) => {
      state.status = Status.ERROR;

      if (action.payload) state.error = action.payload;
    });
  },
});

export const { auth } = authSlice.actions;

export default authSlice.reducer;
