import { combineReducers } from "redux";
import { USER_LOGOUT } from "../actionCreators/rootActions";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
  root: userReducer,
});

//export type AppState = ReturnType<typeof rootReducer>;

// export default rootReducer;
export default (state : any, action : any) => rootReducer(action.type === USER_LOGOUT ? undefined : state, action);
