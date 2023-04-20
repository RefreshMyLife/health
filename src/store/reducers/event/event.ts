import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';
import { Status } from '../../../models/StatusRequest';
import { IEvent } from './../../../models/IEvent';

interface EventState {
  events: IEvent[];
  status: string;
  error: string | null | undefined | object;
}

const initialState: EventState = {
  status: '',
  events: [],
  error: '',
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    createEvent(state, action: PayloadAction<IEvent>) {
      state.events.push(action.payload);
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(authLoginUser.pending, (state) => {
  //       state.status = Status.LOADING;
  //     });
  //     builder.addCase(authLoginUser.fulfilled, (state, action) => {
  //       state.isAuth = true;
  //       state.user = action.payload;
  //       state.status = Status.SUCCESS;
  //     });
  //
  //     builder.addCase(authLoginUser.rejected, (state, action) => {
  //       state.status = Status.ERROR;
  //
  //       if (action.payload) state.error = action.payload;
  //     });
  //   },
});

export const { createEvent } = eventSlice.actions;

export default eventSlice.reducer;
