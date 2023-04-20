import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './reducers/auth/auth';
import eventReducer from './reducers/event/event';
import exerciseReducer from './reducers/exercise/exercise';
const rootReducer = combineReducers({
    auth: authReducer,
    event: eventReducer,
    exercise: exerciseReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore['dispatch'];
