import { APP_TYPES } from "./types";
import { ActionUnion } from "../common/helpers/actionHelper";

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
};

export type Actions = ActionUnion<typeof ActionCreators>;
