'use client';

import { type ReactNode, useEffect, useState } from 'react';

import type { ToastActionElement, ToastProps } from '~components/ui/toast';

import { genId } from './utils';

/**
 * To display multiple toasts at the same time, you can update the TOAST_LIMIT constant to a higher number.
 */
const TOAST_LIMIT = 1;

/**
 * The delay in milliseconds before a toast is removed after it has been dismissed.
 */
const TOAST_REMOVE_DELAY = 1000000;

const ACTION_TYPE = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const;

type ToasterToast = ToastProps & {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  action?: ToastActionElement;
};

type Toast = Omit<ToasterToast, 'id'>;

type ActionType = typeof ACTION_TYPE;

type Action =
  | {
      type: ActionType['ADD_TOAST'];
      toast: ToasterToast;
    }
  | {
      type: ActionType['UPDATE_TOAST'];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType['DISMISS_TOAST'];
      toastId?: ToasterToast['id'];
    }
  | {
      type: ActionType['REMOVE_TOAST'];
      toastId?: ToasterToast['id'];
    };

type State = {
  toasts: ToasterToast[];
};

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

/**
 * Schedules a toast for removal after a delay.
 *
 * @param toastId - The unique identifier of the toast to be removed.
 *
 * If the toast is already scheduled for removal, the function does nothing.
 * Otherwise, it sets a timeout to dispatch a 'REMOVE_TOAST' action after `TOAST_REMOVE_DELAY` milliseconds.
 * The timeout ID is stored in the `toastTimeouts` Map with the `toastId` as the key.
 * This allows the removal to be cancelled if necessary.
 */
const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);

    dispatch({
      type: 'REMOVE_TOAST',
      toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

/**
 * A reducer function for managing the state of toast notifications.
 *
 * @param state - The current state.
 * @param action - The action to perform.
 * The action types are:
 * - 'ADD_TOAST': Adds a new toast to the state. If the number of toasts exceeds `TOAST_LIMIT`, the oldest toasts are removed.
 * - 'UPDATE_TOAST': Updates the properties of an existing toast.
 * - 'DISMISS_TOAST': Schedules a toast for removal. If no toast ID is provided, all toasts are scheduled for removal.
 * - 'REMOVE_TOAST': Immediately removes a toast. If no toast ID is provided, all toasts are removed.
 * @returns The new state of the toasts after the action has been applied.
 */
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      };

    case 'DISMISS_TOAST': {
      const { toastId } = action;

      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }

    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: ((state: State) => void)[] = [];

let memoryState: State = { toasts: [] };

/**
 * Dispatches an action to the reducer and notifies all listeners of the new state.
 *
 * @param action - An action object containing a type and a payload.
 *
 * The function first applies the reducer to the current state and the action, updating the state.
 * It then calls each listener function with the new state as the argument.
 */
const dispatch = (action: Action) => {
  memoryState = reducer(memoryState, action);

  listeners.forEach((listener) => {
    listener(memoryState);
  });
};

/**
 * Creates a new toast notification.
 *
 * @param props - The properties of the toast.
 * The function generates a unique ID for the toast and dispatches an 'ADD_TOAST' action.
 * It also provides `update` and `dismiss` functions for the toast.
 * The `update` function dispatches an 'UPDATE_TOAST' action with the updated properties of the toast.
 * The `dismiss` function dispatches a 'DISMISS_TOAST' action to schedule the toast for removal.
 * @returns An object containing the ID of the toast and the `dismiss` and `update` functions.
 */
export const toast = ({ ...props }: Toast) => {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: 'UPDATE_TOAST',
      toast: { ...props, id },
    });

  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id });

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id,
    dismiss,
    update,
  };
};

/**1
 * Custom hook for managing toast notifications.
 *
 * The hook subscribes to changes in the toast state and updates its local state whenever the toast state changes.
 * When the component using the hook unmounts, the hook unsubscribes from the toast state to prevent memory leaks.
 *
 * The hook returns an object containing the current state of the toasts, a `toast` function for creating new toasts,
 * and a `dismiss` function for dismissing toasts.
 *
 * @returns An object containing the current state of the toasts, a `toast` function, and a `dismiss` function.
 */
export const useToast = () => {
  const [state, setState] = useState(memoryState);

  useEffect(() => {
    listeners.push(setState);

    return () => {
      const index = listeners.indexOf(setState);

      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId }),
  };
};
