import { configureStore, type Middleware, type Reducer } from '@reduxjs/toolkit';
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';

import { ENVIRONMENT } from '~constants/environment';

import { createReducer } from './root-reducer';

/**
 * Configures the middleware which are used during the React application lifecycle.
 */
const middlewares: Middleware[] = [];

/**
 * If the current environment is development, add the logger middleware to the middleware array.
 */
if (process.env.NODE_ENV === ENVIRONMENT.DEVELOPMENT) {
  /**
   * Creates a logger middleware for Redux that logs actions and state changes to the console.
   *
   * @param getState - A function that returns the current state of the Redux store.
   * @param action - The action object that was dispatched to the Redux store.
   * @param logEntry - An object that contains information about the log entry.
   * @returns A boolean value that determines whether the log entry should be collapsed in the console.
   */
  const logger = createLogger({
    collapsed: (_getState, _action, logEntry) => (logEntry ? !logEntry.error : true),
  });

  middlewares.push(logger);
}

/**
 * The Redux store instance.
 */
export const store = configureStore({
  reducer: createReducer({}),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === ENVIRONMENT.DEVELOPMENT,
});

/**
 * Create async reducer to dynamic import reducer later
 */
const asyncStore: Map<string, Reducer> = new Map();

/**
 * Injects a reducer into the store's asyncStore object and replaces the store's reducer with a new one that includes the injected reducer.
 *
 * @param key - The key to use for the reducer in the asyncStore object.
 * @param reducer - The reducer function to inject into the store.
 * @returns The updated store object.
 */
export const injectReducer = (key: string, reducer: Reducer) => {
  if (asyncStore.has(key)) {
    return false;
  }

  asyncStore.set(key, reducer);

  store.replaceReducer(createReducer(Object.fromEntries(asyncStore.entries())));

  return store;
};

/**
 * The type of the root state of the Redux store.
 */
export type RootStateProps = ReturnType<typeof store.getState>;

/**
 * The type of the dispatch function that can be used to dispatch actions to the store.
 */
export type AppDispatchProps = typeof store.dispatch;

/**
 * Typed hook to get the Redux store dispatch function.
 */
export const useAppDispatch: () => AppDispatchProps = useDispatch;

/**
 * Typed hook to get a slice of the Redux store state.
 */
export const useAppSelector: TypedUseSelectorHook<RootStateProps> = useSelector;
