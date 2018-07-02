import { AllActions } from "../actions";
import { APP_TYPES } from "../actions/types";

export function reducer(state: number | null = null, action: AllActions): number | null {
  switch (action.type) {
    case APP_TYPES.LOGOUT: {
      return null;
    }

    case APP_TYPES.CHANGE_CURRENT_USER: {
      return action.payload.userId;
    }

    default: {
      return state;
    }
  }
}
