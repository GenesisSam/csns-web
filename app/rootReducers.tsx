import { combineReducers, Reducer } from "redux";
import { routerReducer } from "react-router-redux";
import { INormalizedData } from "common/models/normalized";
import { reducer as UserReducer } from "app/reducers/users";
import { reducer as NormalizrReducer, INITIAL_STATE as NORMALIZR_INITIAL_STATE } from "app/reducers/normalizr";

interface IAppState
  extends Readonly<{
      currentUser: number | null;
      entities: INormalizedData;
    }> {}

export const INITIAL_APP_STORE_STATE: IAppState = {
  currentUser: null,
  entities: NORMALIZR_INITIAL_STATE,
};

const rootReducer: Reducer<IAppState> = combineReducers({
  currentUser: UserReducer,
  entities: NormalizrReducer,
  router: routerReducer,
});

export default rootReducer;
