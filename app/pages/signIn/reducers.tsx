import { AllActions } from "app/actions";
import { APP_TYPES } from "app/actions/types";

export interface ISignPageReducer {
  isFailed: boolean;
  isLoading: boolean;
  isSucceed: boolean;
  errorMessage: string;
}

export const INITIAL_SIGNIN_PAGE_STATE: ISignPageReducer = {
  isFailed: false,
  isLoading: false,
  isSucceed: false,
  errorMessage: "",
};

export function reducer(state = INITIAL_SIGNIN_PAGE_STATE, action: AllActions): ISignPageReducer {
  switch (action.type) {
    case APP_TYPES.START_LOGIN: {
      return {
        isLoading: true,
        isFailed: false,
        isSucceed: false,
        errorMessage: "",
      };
    }

    case APP_TYPES.FAILED_LOGIN: {
      return {
        isLoading: false,
        isFailed: true,
        isSucceed: false,
        errorMessage: action.payload.errorMessage,
      };
    }

    case APP_TYPES.SUCCEED_LOGIN: {
      return {
        isLoading: false,
        isFailed: false,
        isSucceed: true,
        errorMessage: "",
      };
    }

    default:
      return state;
  }
}
