import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';

import CalendarService from './../../../services/CalendarService';

export const fetchEventForUser = createAsyncThunk('auth/login', async () => {
  const data = await CalendarService.fetchEvent();

  return data;
});
