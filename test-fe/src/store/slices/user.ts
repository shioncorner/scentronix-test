import { createSlice } from '@reduxjs/toolkit';

import type { UserSliceProps } from '~types/slices/user';

export const userInitialState: UserSliceProps = {};

/**
 * User slice of the Redux store.
 */
export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {},
});

/**
 * Exports the actions of the user slice.
 */
export const userActions = userSlice.actions;

/**
 * Redux reducer for user state.
 */
export const userReducer = userSlice.reducer;
