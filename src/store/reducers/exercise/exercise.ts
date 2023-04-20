import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';
import { Status } from '../../../models/StatusRequest';
import { IEvent } from './../../../models/IEvent';
import { IExersice } from '../../../models/IExercise';

interface EventState {
    exercise: IExersice[];
    status: string;
    error: string | null | undefined | object;
}

const initialState: EventState = {
    status: '',
    exercise: [],
    error: '',
};

export const exerciseSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        addExercise(state, action: PayloadAction<IExersice>) {
            state.exercise.push(action.payload);
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

export const { addExercise } = exerciseSlice.actions;

export default exerciseSlice.reducer;
