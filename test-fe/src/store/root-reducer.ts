import { combineReducers, type ReducersMapObject } from '@reduxjs/toolkit';

import { userReducer, userSlice } from './slices/user';

/**
 * Creates a root reducer function by combining the user reducer with any additional async reducers.
 *
 * @param asyncReducers - An object containing any additional reducers to be combined with the user reducer.
 * @returns A new reducer function that combines the user reducer with any additional async reducers.
 */
export const createReducer = (asyncReducers: ReducersMapObject) =>
  combineReducers({
    [userSlice.name]: userReducer,
    ...asyncReducers,
  });
