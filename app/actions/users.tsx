import { APP_TYPES } from "./types";
import { Dispatch } from "redux";
import { CancelToken } from "axios";
import { ActionUnion } from "../common/helpers/actionHelper";
import AuthAPI from "app/common/api/auth";
import { ActionCreators as NormalizrActionCreators } from "./normalizr";
import { DispatchActions } from "app/rootReducers";

function createAction<T extends { type: APP_TYPES }>(d: T): T {
  return d;
}

export const ActionCreators = {
  changeCurrentUser: (userId: number) =>
    createAction({
      type: APP_TYPES.CHANGE_CURRENT_USER,
      payload: {
        userId,
      },
    }),

  logout: () =>
    createAction({
      type: APP_TYPES.LOGOUT,
    }),

  startLogin: () =>
    createAction({
      type: APP_TYPES.START_LOGIN,
    }),
  failedLogin: () =>
    createAction({
      type: APP_TYPES.FAILED_LOGIN,
    }),
  succeedLogin: () =>
    createAction({
      type: APP_TYPES.SUCCEED_LOGIN,
    }),
};

export type Actions = ActionUnion<typeof ActionCreators>;

export function signIn(email: string, password: string, cancelToken: CancelToken): DispatchActions {
  return async (dispatch: Dispatch) => {
    dispatch(ActionCreators.startLogin());
    try {
      const result = await AuthAPI.signIn(email, password, cancelToken);
      dispatch(NormalizrActionCreators.addEntities(result.entities));
      dispatch(ActionCreators.changeCurrentUser(result.result));

      dispatch(ActionCreators.succeedLogin());
    } catch (err) {
      dispatch(ActionCreators.failedLogin());
    }
  };
}
