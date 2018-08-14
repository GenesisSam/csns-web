import { combineReducers, Reducer, Action } from "redux";
import { routerReducer } from "react-router-redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AllActions } from "app/actions";
import { INormalizedData } from "common/models/normalized";
import { reducer as UserReducer } from "app/reducers/users";
import { reducer as NormalizrReducer, INITIAL_STATE as NORMALIZR_INITIAL_STATE } from "app/reducers/normalizr";
import { reducer as SignInPageReducer, INITIAL_SIGNIN_PAGE_STATE, ISignPageReducer } from "app/pages/signIn/reducers";

export type DispatchActions<R = Promise<void>> = ThunkAction<R, IAppState, undefined, AllActions | Action<string>>;

export type AppDispatch = ThunkDispatch<IAppState, undefined, AllActions | Action<string>>;

export interface IAppState
  extends Readonly<{
      currentUser: number | null;
      signInPage: ISignPageReducer;
      entities: INormalizedData;
    }> {}

export const INITIAL_APP_STORE_STATE: IAppState = {
  currentUser: null,
  signInPage: INITIAL_SIGNIN_PAGE_STATE,
  entities: NORMALIZR_INITIAL_STATE,
};

const rootReducer: Reducer<IAppState> = combineReducers({
  currentUser: UserReducer,
  signInPage: SignInPageReducer,
  entities: NormalizrReducer,
  router: routerReducer,
});

export default rootReducer;
