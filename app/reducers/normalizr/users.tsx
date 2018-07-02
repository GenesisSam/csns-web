import { AllActions } from "../../actions";
import { CommonDataTypes } from "../../actions/types";

export function reducer(state: User.INormalizedList = {}, action: AllActions): User.INormalizedList {
  switch (action.type) {
    case CommonDataTypes.ADD_ENTITIES: {
      return {
        ...state,
        ...action.payload.users,
      };
    }

    default: {
      return state;
    }
  }
}
